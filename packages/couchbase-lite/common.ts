import {getJsObjectMock,} from "./jsObjectOperationsMock";
import {sdk, saveInBatch} from ".";
import {getCompliantDocument, objToCblDoc} from "./toNativeCblConverter";
import {QueryResultShaper} from "./queryResultShaper";
import MutableDocument = com.couchbase.lite.MutableDocument;
import Database = com.couchbase.lite.Database;
import DataSource = com.couchbase.lite.DataSource;
import AbstractQuery = com.couchbase.lite.AbstractQuery;
import From = com.couchbase.lite.From;
import POJODoc = com.couchbase.lite.POJODoc;

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

  sdk.Database.prototype.createDocument = function (document: POJODoc, ...args): MutableDocument | false {
    const compliantInstance = objToCblDoc(document);
    const result = sdk.Database.originals.save.call(this, compliantInstance, ...args);
    if (result === undefined || result === true) {
      return getJsObjectMock(compliantInstance);
    }
    return false;
  };

  sdk.Database.prototype.save = function (doc: POJODoc | MutableDocument, ...args) {
    return sdk.Database.originals.save.call(this, getCompliantDocument(doc), ...args);
  };

  sdk.Database.prototype.saveInBatch = function (docs: POJODoc[] | MutableDocument[]): Promise<void> {
    const nativeDocs = [];
    for (const doc of docs) {
      nativeDocs.push(getCompliantDocument(doc));
    }

    return saveInBatch(this, nativeDocs);
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
