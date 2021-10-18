import {DemoSharedBase} from '../utils';
import {sdk,} from "@parempi/couchbase-lite";

export class DemoSharedCouchbaseLite extends DemoSharedBase {

  showCbLiteVersion() {
    alert(sdk.BuildConfig.VERSION_CODE);
  }
}
