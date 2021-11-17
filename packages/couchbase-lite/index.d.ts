/// <reference path="./sdk.d.ts" />
/// <reference path="./helpers.d.ts" />

export const cbl = com.couchbase.lite, cblHelpers = com.parempi.couchbase;

export function open(db: string | com.parempi.couchbase.PrebuiltDb): Promise<com.couchbase.lite.Database>;

export function openSync(db: string | com.parempi.couchbase.PrebuiltDb): com.couchbase.lite.Database;

export function fetchDocuments(query, db): Promise<Iterable<MutableDocument>>;

export function fetch(query): Promise<Iterable<MutableDictionaryInterface>>;
export function fetchAsJson(query): Promise<string>;

export function fetchAll(query: com.couchbase.lite.Query): Promise<Iterable<MutableDictionaryInterface>>;
export function fetchAllAsJson(query: com.couchbase.lite.Query): Promise<string>;

export function fetchColumn<T>(query): Promise<Iterable<T>>;
export function fetchColumnAsJson(query): Promise<string>;

export function fetchValue<T>(query): Promise<T>;
export function fetchValueAsJson(query): Promise<string>;

export function saveInBatch(db: Database, docs: MutableDocument[]): Promise<void>;

abstract class AbstractQueryShaper {
  constructor(db: Database, queryBuilder?: (query: From) => AbstractQuery);
  distinct(): this;

  select(...args): From;

  abstract column(prop: SelectResult): Promise<any>;

  abstract rows(...props: SelectResult[]): Promise<any>;

  abstract value(prop: SelectResult): Promise<any>;
}

export class QueryShaper extends AbstractQueryShaper {
  documents(): Promise<Iterable<MutableDocument>>;

  column<T>(prop: SelectResult): Promise<Iterable<T>>;

  rows(...props: SelectResult[]): Promise<Iterable<MutableDictionaryInterface>>;

  value<T>(prop: SelectResult): Promise<T>;

  json(): JsonShaper;

  plain(): PlainShaper;
}


class JsonShaper extends AbstractQueryShaper {
  column(prop: SelectResult): Promise<string>;

  rows(...props: SelectResult[]): Promise<string>;

  value(prop: SelectResult): Promise<string>;
}

class PlainShaper extends AbstractQueryShaper {
  async column<T>(prop: com.couchbase.lite.SelectResult): Promise<T[]>;

  async rows(...props: com.couchbase.lite.SelectResult[]): Promise<POJODoc[]>;

  async value<T>(prop: com.couchbase.lite.SelectResult): Promise<T>;
}
