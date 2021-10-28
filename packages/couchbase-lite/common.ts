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

  sdk.Database.prototype.save = function (...args) {
    args[0] = getCompliantInstance(args[0]);
    return sdk.Database.originals.save.apply(this, args);
  };
}
