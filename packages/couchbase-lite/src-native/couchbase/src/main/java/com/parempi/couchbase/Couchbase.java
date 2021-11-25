package com.parempi.couchbase;

import android.content.Context;
import com.couchbase.lite.CouchbaseLite;
import com.couchbase.lite.CouchbaseLiteException;
import com.couchbase.lite.Database;
import com.couchbase.lite.DatabaseConfiguration;
import com.couchbase.lite.internal.CouchbaseLiteInternal;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.Executors;

import static com.parempi.couchbase.ThreadedExecutor.promisifyThread;


public class Couchbase {
  private static boolean isInitialized = false;

  public static void open(PrebuiltDb prebuiltDb, Promise promise) {
    DatabaseConfiguration config = getDefaultConfig();
    promisifyThread(promise, () -> {
      if (!Database.exists(prebuiltDb.getName(),
        new File(config.getDirectory()))) {
        prebuiltDb.install(config);
      }
      return new Database(prebuiltDb.getName(), config);
    });
  }

  public static void open(String dbName, Promise promise) {
    open(new PrebuiltDbZip(dbName,
      getContext().getFilesDir().getAbsolutePath() + "/app"), promise);
  }

  public static Database openSync(PrebuiltDb prebuiltDb) throws CouchbaseLiteException, IOException, NSCouchbaseLiteException {
    DatabaseConfiguration config = getDefaultConfig();
    if (!Database.exists(prebuiltDb.getName(),
      new File(config.getDirectory()))) {
      prebuiltDb.install(config);
    }
    return new Database(prebuiltDb.getName(), config);
  }

  public static Database openSync(String dbName) throws CouchbaseLiteException, IOException, NSCouchbaseLiteException {
    return openSync(new PrebuiltDbZip(dbName,
      getContext().getFilesDir().getAbsolutePath() + "/app"));
  }

  public static void init(Context context) {
    if (!isInitialized) {
      CouchbaseLite.init(context);
      ThreadedExecutor.setExecutorService(Executors.newFixedThreadPool(2));
      isInitialized = true;
    }
  }

  private static DatabaseConfiguration getDefaultConfig() {
    return new DatabaseConfiguration().setDirectory(getContext().getFilesDir().getAbsolutePath());
  }

  private static Context getContext() {
    return CouchbaseLiteInternal.getContext();
  }
}


