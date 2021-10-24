package com.parempi.couchbase;

import com.couchbase.lite.CouchbaseLiteException;
import com.couchbase.lite.DatabaseConfiguration;

import java.io.IOException;

abstract class PrebuiltDb {
  protected final String CBL_EXTENSION = "cblite2";
  protected String name;
  protected String location;

  public PrebuiltDb(String name, String location) {
    this.name = name;
    this.location = location;
  }

  public abstract void install(DatabaseConfiguration config) throws CouchbaseLiteException, NSCouchbaseLiteException, IOException;

  public abstract boolean exists();

  public String getName() {
    return name;
  }

  public String getLocation() {
    return location;
  }
}
