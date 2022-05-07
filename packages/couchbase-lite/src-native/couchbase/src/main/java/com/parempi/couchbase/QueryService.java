package com.parempi.couchbase;

import com.couchbase.lite.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import static com.parempi.couchbase.CblJsonSerializer.toJson;
import static com.parempi.couchbase.ThreadedExecutor.promisifyThread;

public class QueryService {
  public static void fetchDocuments(Query query, Database db, Promise promise) {
    promisifyThread(promise, () -> {
      ResultSet resultsIter = query.execute();

      List<MutableDocument> documents = new ArrayList<>();
      for (Result result : resultsIter) {
        documents.add(
          db.getDocument(
            Objects.requireNonNull(
              result.getString("id")
            )
          ).toMutable()
        );
      }

      return documents;
    });
  }

  private static List<MutableDictionaryInterface> fetch(Query query) throws CouchbaseLiteException {
    ResultSet resultsIter = query.execute();

    List<MutableDictionaryInterface> listOfRows = new ArrayList<>();

    Result result = resultsIter.next();
    if (result == null) {
      return listOfRows;
    }
    List<String> columns = result.getKeys();
    do {
      listOfRows.add(
        resultToDictionary(result, columns)
      );
    } while ((result = resultsIter.next()) != null);

    return listOfRows;
  }

  public static void fetch(Query query, Promise promise) {
    promisifyThread(promise, () -> fetch(query));
  }

  public static void fetchAsJson(Query query, Promise promise) {
    promisifyThread(promise, () -> toJson(fetch(query)));
  }

  private static MutableDictionaryInterface resultToDictionary(Result result,
                                                               List<String> columns) {
    MutableDictionaryInterface dictionary = new MutableDictionary();
    for (String column : columns) {
      dictionary.setValue(column, result.getValue(column));
    }
    return dictionary;
  }

  public static List<MutableDictionaryInterface> fetchAll(Query query) throws CouchbaseLiteException {
    ResultSet resultsIter = query.execute();

    List<MutableDictionaryInterface> rowsOfAllProps = new ArrayList<>();
    for (Result result : resultsIter) {
      rowsOfAllProps.add(
        flattenSelectedAll(result)
      );
    }
    return rowsOfAllProps;
  }

  public static void fetchAll(Query query, Promise promise) {
    promisifyThread(promise, () -> fetchAll(query));
  }

  public static void fetchAllAsJson(Query query, Promise promise) {
    promisifyThread(promise, () -> toJson(fetchAll(query)));
  }

  private static MutableDictionaryInterface flattenSelectedAll(Result result) {
    return result
      .getDictionary(0)
      .toMutable()
      .setString("id", result.getString("id"));
  }

  private static List<Object> fetchColumn(Query query) throws CouchbaseLiteException {
    ResultSet resultsIter = query.execute();
    List<Object> column = new ArrayList<>();
    for (Result result : resultsIter) {
      column.add(result.getValue(0));
    }
    return column;
  }

  public static void fetchColumn(Query query, Promise promise) {
    promisifyThread(promise, () -> fetchColumn(query));
  }

  public static void fetchColumnAsJson(Query query, Promise promise) {
    promisifyThread(promise,
      () -> toJson(fetchColumn(query)));
  }

  private static Object fetchValue(Query query) throws CouchbaseLiteException {
    Result result = query.execute().next();
    if (result == null) {
      return null;
    }
    return result.getValue(0);
  }

  public static void fetchValue(Query query, Promise promise) {
    promisifyThread(promise, () -> fetchValue(query));
  }

  public static void fetchValueAsJson(Query query, Promise promise) {
    promisifyThread(promise, () -> toJson(fetchValue(query)));
  }

  public static void saveInBatch(Database db, MutableDocument[] documents,
                                 Promise promise) {
    promisifyThread(promise, () -> {
      db.inBatch(() -> {
        try {
          for (MutableDocument document : documents) {
            db.save(document);
          }
        } catch (CouchbaseLiteException e) {
          throw new RuntimeException(e.getMessage());
        }
      });
      return null;
    });
  }
}
