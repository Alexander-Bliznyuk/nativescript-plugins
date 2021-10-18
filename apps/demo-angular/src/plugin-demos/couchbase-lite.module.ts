import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { CouchbaseLiteComponent } from './couchbase-lite.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: CouchbaseLiteComponent }])],
  declarations: [CouchbaseLiteComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class CouchbaseLiteModule {}
