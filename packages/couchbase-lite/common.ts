import {getJsObjectMock,} from "./jsObjectOperationsMock";
import {sdk} from ".";
import {getCompliantInstance, objToCblDict} from "./toNativeCblConverter";
import MutableDocument = com.couchbase.lite.MutableDocument;

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
}
