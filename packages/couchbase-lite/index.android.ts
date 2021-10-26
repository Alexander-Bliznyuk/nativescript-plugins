import {Utils} from "@nativescript/core";
export const sdk = com.couchbase.lite, couchbase = com.parempi.couchbase;

import('./common');

export async function open(db: string | com.parempi.couchbase.PrebuiltDb): Promise<com.couchbase.lite.Database> {
  return new Promise((resolve, reject) => {
    const resolver = new couchbase.Promise({resolve, reject});
    const context = Utils.ad.getApplicationContext();

    // overloaded methods don't match union types, therefore below is a typechecking to calm down typescript
    if (typeof db === "string") {
      couchbase.Couchbase.open(context, db, resolver);
    } else {
      couchbase.Couchbase.open(context, db, resolver);
    }
  });
}

export function openSync(db: string | com.parempi.couchbase.PrebuiltDb): com.couchbase.lite.Database {
  const context = Utils.ad.getApplicationContext();

  // overloaded methods don't match union types, therefore below is a typechecking to calm down typescript
  if (typeof db === "string") {
    return couchbase.Couchbase.openSync(context, db);
  } else {
    return couchbase.Couchbase.openSync(context, db);
  }
}


