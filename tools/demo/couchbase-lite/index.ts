import {DemoSharedBase} from '../utils';
import {cbl, open,} from "@parempi/couchbase-lite";
import {Frame, ObservableArray,} from "@nativescript/core";
import ToDoList, {ListItem} from "./ToDoList";
import fillAndTrack from "./ToDoListRepository";

export class DemoSharedCouchbaseLite extends DemoSharedBase {
  showCbLiteVersion() {
    alert(cbl.BuildConfig.VERSION_CODE);
  }

  async openToDoList() {
    const listName = 'groceries';
    const list = new ObservableArray<ListItem>([]);

    open('todo').then(fillAndTrack(list, listName, 'todo'));

    Frame.topmost().navigate({
      moduleName: 'plugin-demos/couchbase/to-do-list',
      bindingContext: new ToDoList(list, listName, ListItem),
    });
  }
}
