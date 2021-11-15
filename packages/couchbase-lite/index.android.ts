import {Utils} from "@nativescript/core";
import {getJsObjectMock} from "./jsObjectOperationsMock";
import MutableDictionaryInterface = com.couchbase.lite.MutableDictionaryInterface;
import MutableDocument = com.couchbase.lite.MutableDocument;
import Database = com.couchbase.lite.Database;

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


export function fetchDocuments(query, db): Promise<Iterable<MutableDocument>> {
  return new Promise<java.util.List<MutableDocument>>((resolve, reject) => {
    couchbase.QueryService.fetchDocuments(query, db, new couchbase.Promise({resolve, reject}));
  }).then(toJsIterable);
}

export function fetch(query): Promise<Iterable<MutableDictionaryInterface>> {
  return new Promise<java.util.List<MutableDictionaryInterface>>((resolve, reject) => {
    couchbase.QueryService.fetch(query, new couchbase.Promise({resolve, reject}));
  }).then(toJsIterable);
}

export function fetchAll(query: com.couchbase.lite.Query): Promise<Iterable<MutableDictionaryInterface>> {
  return new Promise<java.util.List<MutableDictionaryInterface>>((resolve, reject) => {
    couchbase.QueryService.fetchAll(query, new couchbase.Promise({resolve, reject}));
  }).then(toJsIterable);
}

export function fetchColumn<T>(query): Promise<Iterable<T>> {
  return new Promise<java.util.List<T>>((resolve, reject) => {
    couchbase.QueryService.fetchColumn(query, new couchbase.Promise({resolve, reject}));
  }).then(toJsIterable);
}


export function fetchValue<T>(query): Promise<T> {
  return new Promise((resolve, reject) => {
    couchbase.QueryService.fetchValue(query, new couchbase.Promise({resolve, reject}));
  }).then(getJsObjectMock);
}

export async function saveInBatch(db: Database, docs: MutableDocument[]): Promise<void> {
  return new Promise((resolve, reject) => {
    couchbase.QueryService.saveInBatch(db, docs, new couchbase.Promise({resolve, reject}));
  });
}

function* toJsIterable<T>(obj: java.util.List<T>): Iterable<T> {
  for (let i = 0; i < obj.size(); i++) {
    if (obj[i] === undefined) {
      obj[i] = getJsObjectMock(obj.get(i)); // cache
    }
    yield obj[i];
  }
}

