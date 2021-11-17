import {Utils} from "@nativescript/core";
import {getJsObjectMock} from "./jsObjectOperationsMock";
import MutableDictionaryInterface = com.couchbase.lite.MutableDictionaryInterface;
import MutableDocument = com.couchbase.lite.MutableDocument;
import Database = com.couchbase.lite.Database;

export const cbl = com.couchbase.lite, cblHelpers = com.parempi.couchbase;

import('./common');

export async function open(db: string | com.parempi.couchbase.PrebuiltDb): Promise<com.couchbase.lite.Database> {
  return new Promise((resolve, reject) => {
    const resolver = new cblHelpers.Promise({resolve, reject});
    const context = Utils.ad.getApplicationContext();

    // overloaded methods don't match union types, therefore below is a typechecking to calm down typescript
    if (typeof db === "string") {
      cblHelpers.Couchbase.open(context, db, resolver);
    } else {
      cblHelpers.Couchbase.open(context, db, resolver);
    }
  });
}

export function openSync(db: string | com.parempi.couchbase.PrebuiltDb): com.couchbase.lite.Database {
  const context = Utils.ad.getApplicationContext();

  // overloaded methods don't match union types, therefore below is a typechecking to calm down typescript
  if (typeof db === "string") {
    return cblHelpers.Couchbase.openSync(context, db);
  } else {
    return cblHelpers.Couchbase.openSync(context, db);
  }
}


export function fetchDocuments(query, db): Promise<Iterable<MutableDocument>> {
  return new Promise<java.util.List<MutableDocument>>((resolve, reject) => {
    cblHelpers.QueryService.fetchDocuments(query, db, new cblHelpers.Promise({resolve, reject}));
  }).then(toJsIterable);
}

export function fetch(query): Promise<Iterable<MutableDictionaryInterface>> {
  return new Promise<java.util.List<MutableDictionaryInterface>>((resolve, reject) => {
    cblHelpers.QueryService.fetch(query, new cblHelpers.Promise({resolve, reject}));
  }).then(toJsIterable);
}

export function fetchAsJson(query): Promise<string> {
  return new Promise((resolve, reject) => {
    cblHelpers.QueryService.fetchAsJson(query, new cblHelpers.Promise({resolve, reject}));
  });
}

export function fetchAll(query: com.couchbase.lite.Query): Promise<Iterable<MutableDictionaryInterface>> {
  return new Promise<java.util.List<MutableDictionaryInterface>>((resolve, reject) => {
    cblHelpers.QueryService.fetchAll(query, new cblHelpers.Promise({resolve, reject}));
  }).then(toJsIterable);
}

export function fetchAllAsJson(query: com.couchbase.lite.Query): Promise<string> {
  return new Promise((resolve, reject) => {
    cblHelpers.QueryService.fetchAllAsJson(query, new cblHelpers.Promise({resolve, reject}));
  });
}

export function fetchColumn<T>(query): Promise<Iterable<T>> {
  return new Promise<java.util.List<T>>((resolve, reject) => {
    cblHelpers.QueryService.fetchColumn(query, new cblHelpers.Promise({resolve, reject}));
  }).then(toJsIterable);
}

export async function fetchColumnAsJson(query): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    cblHelpers.QueryService.fetchColumnAsJson(query, new cblHelpers.Promise({resolve, reject}));
  });
}

export function fetchValue<T>(query): Promise<T> {
  return new Promise((resolve, reject) => {
    cblHelpers.QueryService.fetchValue(query, new cblHelpers.Promise({resolve, reject}));
  }).then(getJsObjectMock);
}

export function fetchValueAsJson(query): Promise<string> {
  return new Promise((resolve, reject) => {
    cblHelpers.QueryService.fetchValueAsJson(query, new cblHelpers.Promise({resolve, reject}));
  });
}

export async function saveInBatch(db: Database, docs: MutableDocument[]): Promise<void> {
  return new Promise((resolve, reject) => {
    cblHelpers.QueryService.saveInBatch(db, docs, new cblHelpers.Promise({resolve, reject}));
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

