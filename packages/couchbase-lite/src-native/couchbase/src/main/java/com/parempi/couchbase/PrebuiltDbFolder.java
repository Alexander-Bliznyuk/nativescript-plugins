package com.parempi.couchbase;

import com.couchbase.lite.CouchbaseLiteException;
import com.couchbase.lite.Database;
import com.couchbase.lite.DatabaseConfiguration;

import java.io.File;

public class PrebuiltDbFolder extends PrebuiltDb {
  private final File folder;

  public PrebuiltDbFolder(String name, String location) {
    super(name, location);
    folder = new File(location, name + "." + CBL_EXTENSION);
  }

  @Override
  public void install(DatabaseConfiguration config) throws CouchbaseLiteException {
    if (folder.exists()) {
      Database.copy(folder, name, config);
    }
  }

  @Override
  public boolean exists() {
    return folder.exists();
  }
}
