import {getJsObjectMock,} from "./jsObjectOperationsMock";
import {sdk} from ".";
import MutableDocument = com.couchbase.lite.MutableDocument;
import {getCompliantInstance} from "./toNativeCblConverter";

if (!sdk.Database.originals) {
  sdk.Database.originals = {
    getDocument: sdk.Database.prototype.getDocument,
    save: sdk.Database.prototype.save,
  };
  sdk.Database.prototype.getDocument = function (docName, ...args): MutableDocument {
    const doc = sdk.Database.originals.getDocument.call(this, docName, ...args)?.toMutable()
      || new sdk.MutableDocument(docName);

    return getJsObjectMock(doc);
  };

  sdk.Database.prototype.save = function (doc, ...args) {
    return sdk.Database.originals.save.call(this, getCompliantInstance(doc).compliantInstance, ...args);
  };
}
