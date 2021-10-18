import { Component, NgZone } from '@angular/core';
import { DemoSharedCouchbaseLite } from '@demo/shared';
import { } from '@parempi/couchbase-lite';

@Component({
	selector: 'demo-couchbase-lite',
	templateUrl: 'couchbase-lite.component.html',
})
export class CouchbaseLiteComponent {
  
  demoShared: DemoSharedCouchbaseLite;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedCouchbaseLite();
  }

}