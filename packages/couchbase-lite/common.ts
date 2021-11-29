import {getJsObjectMock,} from "./jsObjectOperationsMock";
import {cbl, saveInBatch} from ".";
import {getCompliantDocument, objToCblDoc} from "./toNativeCblConverter";
import {QueryShaper} from "./QueryShaper";
import MutableDocument = com.couchbase.lite.MutableDocument;
import Database = com.couchbase.lite.Database;
import DataSource = com.couchbase.lite.DataSource;
import AbstractQuery = com.couchbase.lite.AbstractQuery;
import From = com.couchbase.lite.From;
import POJODoc = com.couchbase.lite.POJODoc;

if (!cbl.Database.originals) {
  cbl.Database.originals = {
    getDocument: cbl.Database.prototype.getDocument,
    save: cbl.Database.prototype.save,
  };
  cbl.Database.prototype.getDocument = function (docId): MutableDocument {
    const doc = cbl.Database.originals.getDocument.call(this, docId)?.toMutable()
      || new cbl.MutableDocument(docId);

    return getJsObjectMock(doc);
  };

  cbl.Database.prototype.createDocument = function (document: POJODoc, ...args) {
    const compliantInstance = objToCblDoc(document);
    const result = cbl.Database.originals.save.call(this, compliantInstance, ...args);
    if (result === undefined || result === true) {
      return getJsObjectMock(compliantInstance);
    }
    return false;
  };

  cbl.Database.prototype.save = function (doc: POJODoc | MutableDocument, ...args) {
    return cbl.Database.originals.save.call(this, getCompliantDocument(doc), ...args);
  };

  cbl.Database.prototype.saveInBatch = function (docs: POJODoc[] | MutableDocument[] | Iterable<MutableDocument>): Promise<void> {
    const nativeDocs = [];
    for (const doc of docs) {
      nativeDocs.push(getCompliantDocument(doc));
    }

    return saveInBatch(this, nativeDocs);
  };

  cbl.Database.prototype.getDatasource = function (): DataSource {
    if (this.dataSource === undefined) {
      this.dataSource = cbl.DataSource.database(this);
      if (this.alias !== undefined) {
        this.dataSource = this.dataSource.as(this.alias);
      }
    }
    return this.dataSource;
  };


  cbl.Database.prototype.setAlias = function (alias: string): Database {
    this.alias = alias;
    this.dataSource = cbl.DataSource.database(this).as(this.alias);
    return this;
  };

  cbl.Database.prototype.fetch = function (queryBuilder?: (query: From) => AbstractQuery): QueryShaper {
    return new QueryShaper(this, queryBuilder);
  };
}
