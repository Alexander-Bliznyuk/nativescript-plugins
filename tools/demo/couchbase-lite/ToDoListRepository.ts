import {ChangedData, ChangeType, ObservableArray} from "@nativescript/core";
import {ListItem} from "./ToDoList";
import {sdk} from "@parempi/couchbase-lite";
import Database = com.couchbase.lite.Database;

export default function fillAndTrack(list: ObservableArray<ListItem>, listName: string, docName: string ) {
  return function (db: Database) {
    let autoIncr = 0;

    let doc = db.getDocument(docName);
    if (!doc) {
      doc = new sdk.MutableDocument(docName);
    }

    if (!doc[listName]) {
      doc[listName] = new sdk.MutableArray();
    }

    list.push(...doc[listName]);

    autoIncr = list.length > 0
      ? list.getItem(list.length - 1).id + 1
      : 0;

    list.on('change', save);

    function save({action, index}: ChangedData<ListItem>) {
      switch (action) {
        case ChangeType.Add:
          const dbListItem = new sdk.MutableDictionary();
          list.getItem(index).id = autoIncr++;
          dbListItem.setInt('id', list.getItem(index).id);
          dbListItem.setString('title', list.getItem(index).title);
          doc[listName].push(dbListItem);
          break;
        case ChangeType.Splice:
          doc[listName].remove(index);
          break;
      }

      db.save(doc);
    }
  };
}
