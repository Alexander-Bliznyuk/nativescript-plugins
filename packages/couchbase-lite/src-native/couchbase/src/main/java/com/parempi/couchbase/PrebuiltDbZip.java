package com.parempi.couchbase;

import com.couchbase.lite.CouchbaseLiteException;
import com.couchbase.lite.Database;
import com.couchbase.lite.DatabaseConfiguration;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import static com.parempi.couchbase.Utils.removeDirectory;
import static com.parempi.couchbase.Utils.unzip;

public class PrebuiltDbZip extends PrebuiltDb {
  private final File extractTo;
  private final File archive;

  public PrebuiltDbZip(String name, String location) {
    super(name, location);
    extractTo = new File(location, name + "." + CBL_EXTENSION);
    archive = new File(extractTo.getAbsolutePath() + ".zip");
  }

  @Override
  public void install(DatabaseConfiguration config) throws CouchbaseLiteException, NSCouchbaseLiteException, IOException {
    if (archive.exists()) {
      unzip(new FileInputStream(archive), archive.getParentFile());

      if (extractTo.exists()) {
        Database.copy(extractTo, name, config);
        removeDirectory(extractTo);
      } else {
        throw new NoDbFoundInArchiveException(String.format("Did you place %s" +
          " " +
          "in the root of the archive?", extractTo.getName()));
      }
    }
  }

  @Override
  public boolean exists() {
    return archive.exists();
  }

  private static class NoDbFoundInArchiveException extends NSCouchbaseLiteException {
    private NoDbFoundInArchiveException(String message) {
      super(message);
    }
  }
}
