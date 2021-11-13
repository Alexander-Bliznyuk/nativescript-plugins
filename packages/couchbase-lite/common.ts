import {getJsObjectMock,} from "./jsObjectOperationsMock";
import {sdk} from ".";
import {getCompliantInstance, objToCblDict} from "./toNativeCblConverter";
import {QueryResultShaper} from "./queryResultShaper";
import MutableDocument = com.couchbase.lite.MutableDocument;
import Database = com.couchbase.lite.Database;
import DataSource = com.couchbase.lite.DataSource;
import AbstractQuery = com.couchbase.lite.AbstractQuery;
import From = com.couchbase.lite.From;

if (!sdk.Database.originals) {
  sdk.Database.originals = {
    getDocument: sdk.Database.prototype.getDocument,
    save: sdk.Database.prototype.save,
  };
  sdk.Database.prototype.getDocument = function (docId): MutableDocument {
    const doc = sdk.Database.originals.getDocument.call(this, docId)?.toMutable()
      || new sdk.MutableDocument(docId);

    return getJsObjectMock(doc);
  };

  sdk.Database.prototype.createDocument = function (document: { [key: string]: any, id?: string }, ...args): MutableDocument | false {
    const compliantInstance = objToCblDict(document, new sdk.MutableDocument(document.id));
    if (typeof document.id === 'string') {
      compliantInstance.remove('id');
    }
    const result = sdk.Database.originals.save.call(this, compliantInstance, ...args);
    if (result === undefined || result === true) {
      return getJsObjectMock(compliantInstance);
    }
    return false;
  };

  sdk.Database.prototype.save = function (doc, ...args) {
    return sdk.Database.originals.save.call(this, getCompliantInstance(doc).compliantInstance, ...args);
  };

  sdk.Database.prototype.getDatasource = function (): DataSource {
    if (this.dataSource === undefined) {
      this.dataSource = sdk.DataSource.database(this);
      if (this.alias !== undefined) {
        this.dataSource = this.dataSource.as(this.alias);
      }
    }
    return this.dataSource;
  };


  sdk.Database.prototype.setAlias = function (alias: string): Database {
    this.alias = alias;
    this.dataSource = sdk.DataSource.database(this).as(this.alias);
    return this;
  };

  sdk.Database.prototype.fetch = function (queryBuilder?: (query: From) => AbstractQuery): QueryResultShaper {
    return new QueryResultShaper(this, queryBuilder);
  };
}
