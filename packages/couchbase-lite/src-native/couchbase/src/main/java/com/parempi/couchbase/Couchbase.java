package com.parempi.couchbase;

import android.content.Context;
import com.couchbase.lite.CouchbaseLite;
import com.couchbase.lite.CouchbaseLiteException;
import com.couchbase.lite.Database;
import com.couchbase.lite.DatabaseConfiguration;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.Executors;

import static com.parempi.couchbase.ThreadedExecutor.promisifyThread;


public class Couchbase {
  private static boolean isInitialized = false;

  public static void open(Context context, PrebuiltDb prebuiltDb,
                          Promise promise) {
    DatabaseConfiguration config = configure(context);
    promisifyThread(promise, () -> {
      if (!Database.exists(prebuiltDb.getName(),
        new File(config.getDirectory()))) {
        prebuiltDb.install(config);
      }
      return new Database(prebuiltDb.getName(), config);
    });
  }

  public static void open(Context context, String dbName, Promise promise) {
    open(context, new PrebuiltDbZip(dbName,
      context.getFilesDir().getAbsolutePath() + "/app"), promise);
  }

  public static Database openSync(Context context, PrebuiltDb prebuiltDb) throws CouchbaseLiteException, IOException, NSCouchbaseLiteException {
    DatabaseConfiguration config = configure(context);
    if (!Database.exists(prebuiltDb.getName(),
      new File(config.getDirectory()))) {
      prebuiltDb.install(config);
    }
    return new Database(prebuiltDb.getName(), config);
  }

  public static Database openSync(Context context, String dbName) throws CouchbaseLiteException, IOException, NSCouchbaseLiteException {
    return openSync(context, new PrebuiltDbZip(dbName,
      context.getFilesDir().getAbsolutePath() + "/app"));
  }

  public static void init(Context context) {
    if (!isInitialized) {
      CouchbaseLite.init(context);
      ThreadedExecutor.setExecutorService(Executors.newFixedThreadPool(2));
      isInitialized = true;
    }
  }

  public static DatabaseConfiguration configure(Context context) {
    init(context);
    return new DatabaseConfiguration().setDirectory(context.getFilesDir().getAbsolutePath());
  }
}


