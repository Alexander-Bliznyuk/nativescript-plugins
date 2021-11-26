/// <reference path="./sdk.d.ts" />
/// <reference path="./helpers.d.ts" />

export const cbl = com.couchbase.lite, cblHelpers = com.parempi.couchbase;

export function open(db: string | com.parempi.couchbase.PrebuiltDb): Promise<com.couchbase.lite.Database>;

export function openSync(db: string | com.parempi.couchbase.PrebuiltDb): com.couchbase.lite.Database;

export function fetchDocuments(query, db): Promise<Iterable<com.couchbase.lite.MutableDocument>>;

export function fetch(query: com.couchbase.lite.Query): Promise<Iterable<com.couchbase.lite.MutableDictionaryInterface>>;
export function fetchAsJson(query: com.couchbase.lite.Query): Promise<string>;

export function fetchAll(query: com.couchbase.lite.Query): Promise<Iterable<com.couchbase.lite.MutableDictionaryInterface>>;
export function fetchAllAsJson(query: com.couchbase.lite.Query): Promise<string>;

export function fetchColumn<T>(query: com.couchbase.lite.Query): Promise<Iterable<T>>;
export function fetchColumnAsJson(query: com.couchbase.lite.Query): Promise<string>;

export function fetchValue<T>(query: com.couchbase.lite.Query): Promise<T>;
export function fetchValueAsJson(query: com.couchbase.lite.Query): Promise<string>;

export function saveInBatch(db: com.couchbase.lite.Database, docs: com.couchbase.lite.MutableDocument[]): Promise<void>;
