import {sdk, fetch, fetchAll, fetchColumn, fetchDocuments, fetchValue} from ".";
import AbstractQuery = com.couchbase.lite.AbstractQuery;
import From = com.couchbase.lite.From;
import Database = com.couchbase.lite.Database;
import MutableDocument = com.couchbase.lite.MutableDocument;
import SelectResult = com.couchbase.lite.SelectResult;
import MutableDictionaryInterface = com.couchbase.lite.MutableDictionaryInterface;

export class QueryResultShaper {
  private isDistinct: boolean = false;
  private readonly buildQuery: (query: From) => AbstractQuery;
  private readonly db: Database;

  constructor(db: Database, queryBuilder?: (query: From) => AbstractQuery) {
    this.db = db;
    this.buildQuery = queryBuilder || QueryResultShaper.getDefaultQuery;
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

  documents(): Promise<Iterable<MutableDocument>> {
    const query = this.buildQuery(this.select(sdk.SelectResult.expression(sdk.Meta.id)));
    return fetchDocuments(query, this.db);
  }

  column<T>(prop: SelectResult): Promise<Iterable<T>> {
    const query = this.buildQuery(this.select(prop));
    return fetchColumn(query);
  }

  rows(...props: SelectResult[]): Promise<Iterable<MutableDictionaryInterface>> {
    if (props.length === 0) {
      const query = this.buildQuery(
        this.select(sdk.SelectResult.all(), sdk.SelectResult.expression(sdk.Meta.id))
      );
      return fetchAll(query);
    }
    const query = this.buildQuery(this.select(...props));
    return fetch(query);
  }

  value<T>(prop: SelectResult): Promise<T> {
    const query = this.buildQuery(this.select(prop));
    return fetchValue(query);
  }
}
