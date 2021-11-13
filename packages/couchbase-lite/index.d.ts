/// <reference path="./sdk.d.ts" />
/// <reference path="./wrapper.d.ts" />

export const sdk = com.couchbase.lite, couchbase = com.parempi.couchbase;

export function open(db: string | com.parempi.couchbase.PrebuiltDb): Promise<com.couchbase.lite.Database>;

export function openSync(db: string | com.parempi.couchbase.PrebuiltDb): com.couchbase.lite.Database;

export function fetchDocuments(query, db): Promise<Iterable<MutableDocument>>;

export function fetch(query): Promise<Iterable<MutableDictionaryInterface>>;

export function fetchAll(query: com.couchbase.lite.Query): Promise<Iterable<MutableDictionaryInterface>>;

export function fetchColumn<T>(query): Promise<Iterable<T>>;

export function fetchValue<T>(query): Promise<T>;
