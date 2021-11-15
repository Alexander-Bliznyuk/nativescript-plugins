package com.parempi.couchbase;

import com.couchbase.lite.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

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

  public static void fetch(Query query, Promise promise) {
    promisifyThread(promise, () -> {
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
    });
  }

  private static MutableDictionaryInterface resultToDictionary(Result result,
                                                               List<String> columns) {
    MutableDictionaryInterface dictionary = new MutableDictionary();
    for (String column : columns) {
      dictionary.setValue(column, result.getValue(column));
    }
    return dictionary;
  }

  public static void fetchAll(Query query, Promise promise) {
    promisifyThread(promise, () -> {
      ResultSet resultsIter = query.execute();

      List<MutableDictionaryInterface> rowsOfAllProps = new ArrayList<>();
      for (Result result : resultsIter) {
        rowsOfAllProps.add(
          flattenSelectedAll(result)
        );
      }
      return rowsOfAllProps;
    });
  }

  private static MutableDictionaryInterface flattenSelectedAll(Result result) {
    return result
      .getDictionary(0)
      .toMutable()
      .setString("id", result.getString("id"));
  }

  public static void fetchColumn(Query query, Promise promise) {
    promisifyThread(promise, () -> {
      ResultSet resultsIter = query.execute();
      List<Object> column = new ArrayList<>();
      for (Result result : resultsIter) {
        column.add(result.getValue(0));
      }
      return column;
    });
  }

  public static void fetchValue(Query query, Promise promise) {
    promisifyThread(promise, () -> query.execute().next().getValue(0));
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
