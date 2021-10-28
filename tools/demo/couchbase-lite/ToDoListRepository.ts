import {ChangedData, ChangeType, ObservableArray} from "@nativescript/core";
import {ListItem} from "./ToDoList";
import Database = com.couchbase.lite.Database;

export default function fillAndTrack(list: ObservableArray<ListItem>, listName: string, docName: string ) {
  return function (db: Database) {
    let autoIncr = 0;

    const doc = db.getDocument(docName);
    if (!doc[listName]) {
      doc[listName] = [];
    }

    list.push(...doc[listName]);

    autoIncr = list.length > 0
      ? list.getItem(list.length - 1).id + 1
      : 0;

    list.on('change', save);

    function save({action, index}: ChangedData<ListItem>) {
      switch (action) {
        case ChangeType.Add:
          list.getItem(index).id = autoIncr++;
          doc[listName].push({
            id: list.getItem(index).id,
            title: list.getItem(index).title
          });
          break;
        case ChangeType.Splice:
          doc[listName].remove(index);
          break;
      }

      db.save(doc);
    }
  };
}
