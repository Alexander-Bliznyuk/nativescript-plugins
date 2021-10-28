import {getJsObjectMock, getCompliantInstance} from "./jsObjectOperationsMock";
import {sdk} from ".";
import MutableDocument = com.couchbase.lite.MutableDocument;

if (!sdk.Database.originals) {
  sdk.Database.originals = {
    getDocument: sdk.Database.prototype.getDocument,
    save: sdk.Database.prototype.save,
  };
  sdk.Database.prototype.getDocument = function (...args): MutableDocument {
    const doc = sdk.Database.originals.getDocument.apply(this, args)?.toMutable();
    if (!doc) {
      return null;
    }

    return getJsObjectMock(doc);
  };

  sdk.Database.prototype.save = function (doc, ...args) {
    return sdk.Database.originals.save.call(this, getCompliantInstance(doc), ...args);
  };
}
