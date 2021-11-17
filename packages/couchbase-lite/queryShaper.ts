import {
  fetch,
  fetchAll,
  fetchAllAsJson,
  fetchAsJson,
  fetchColumn,
  fetchColumnAsJson,
  fetchDocuments,
  fetchValue, fetchValueAsJson,
  sdk
} from ".";
import AbstractQuery = com.couchbase.lite.AbstractQuery;
import From = com.couchbase.lite.From;
import Database = com.couchbase.lite.Database;
import MutableDocument = com.couchbase.lite.MutableDocument;
import SelectResult = com.couchbase.lite.SelectResult;
import MutableDictionaryInterface = com.couchbase.lite.MutableDictionaryInterface;
import POJODoc = com.couchbase.lite.POJODoc;
import Query = com.couchbase.lite.Query;

abstract class AbstractQueryShaper {
  protected readonly buildQuery: (query: From) => AbstractQuery;
  protected readonly db: Database;
  private isDistinct: boolean = false;

  constructor(db: Database, queryBuilder?: (query: From) => AbstractQuery) {
    this.db = db;
    this.buildQuery = queryBuilder || AbstractQueryShaper.getDefaultQuery;
  }

  private static getDefaultQuery(query: From): AbstractQuery {
    return query;
  }

  distinct() {
    this.isDistinct = true;
    return this;
  }

  select(...args): From {
    const selector = this.isDistinct ? sdk.QueryBuilder.selectDistinct : sdk.QueryBuilder.select;
    this.isDistinct = false;
    return selector(args).from(this.db.getDatasource());
  }

  abstract column(prop: SelectResult): Promise<any>;

  abstract rows(...props: SelectResult[]): Promise<any>;

  abstract value(prop: SelectResult): Promise<any>;

  protected fetch(fetcher: (query: Query) => Promise<any>, ...props: SelectResult[]) {
    const query = this.buildQuery(this.select(...props));
    return fetcher(query);
  }
}

export class QueryShaper extends AbstractQueryShaper {
  documents(): Promise<Iterable<MutableDocument>> {
    const query = this.buildQuery(this.select(sdk.SelectResult.expression(sdk.Meta.id)));
    return fetchDocuments(query, this.db);
  }

  column<T>(prop: SelectResult): Promise<Iterable<T>> {
    return this.fetch(fetchColumn, prop);
  }

  rows(...props: SelectResult[]): Promise<Iterable<MutableDictionaryInterface>> {
    if (props.length === 0) {
      return this.fetch(fetchAll, sdk.SelectResult.all(), sdk.SelectResult.expression(sdk.Meta.id));
    }
    return this.fetch(fetch, ...props);
  }

  value<T>(prop: SelectResult): Promise<T> {
    return this.fetch(fetchValue, prop);
  }

  json(): JsonShaper {
    return Object.assign(new JsonShaper(this.db, this.buildQuery), this);
  }

  plain(): PlainShaper {
    return Object.assign(new PlainShaper(this.db, this.buildQuery), this);
  }
}

class JsonShaper extends AbstractQueryShaper {
  column(prop: SelectResult): Promise<string> {
    return this.fetch(fetchColumnAsJson, prop);
  }

  rows(...props: SelectResult[]): Promise<string> {
    if (props.length === 0) {
      return this.fetch(fetchAllAsJson, sdk.SelectResult.all(), sdk.SelectResult.expression(sdk.Meta.id));
    }
    return this.fetch(fetchAsJson, ...props);
  }

  value(prop: SelectResult): Promise<string> {
    return this.fetch(fetchValueAsJson, prop);
  }
}

class PlainShaper extends AbstractQueryShaper {
  async column<T>(prop: com.couchbase.lite.SelectResult): Promise<T[]> {
    return JSON.parse(
      await JsonShaper.prototype.column.call(this, prop)
    );
  }

  async rows(...props: com.couchbase.lite.SelectResult[]): Promise<POJODoc[]> {
    return JSON.parse(
      await JsonShaper.prototype.rows.apply(this, props)
    );
  }

  async value<T>(prop: com.couchbase.lite.SelectResult): Promise<T> {
    return JSON.parse(
      await JsonShaper.prototype.value.call(this, prop)
    );
  }
}
