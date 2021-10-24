import {ChangedData, ChangeType, ObservableArray} from "@nativescript/core";
import {ListItem} from "./ToDoList";
import {sdk} from "@parempi/couchbase-lite";
import Database = com.couchbase.lite.Database;

export default function fillAndTrack(list: ObservableArray<ListItem>, listName: string, docName: string ) {
  return function (db: Database) {
    let autoIncr = 0;

    let doc = db.getDocument(docName)?.toMutable();
    if (!doc) {
      doc = new sdk.MutableDocument(docName);
    }

    if (!doc.contains(listName)) {
      doc.setArray(listName, new sdk.MutableArray());
    }

    const dbList = doc.getArray(listName);

    for (let i = 0; i < dbList.count(); i++) {
      const dbListItem = dbList.getDictionary(i);
      list.push(new ListItem(dbListItem.getString('title'), dbListItem.getInt('id')));
    }
    autoIncr = list.length > 0 ? list.getItem(list.length - 1).id + 1 : 0;

    list.on('change', save);

    function save({action, index}: ChangedData<ListItem>) {
      switch (action) {
        case ChangeType.Add:
          const dbListItem = new sdk.MutableDictionary();
          list.getItem(index).id = autoIncr++;
          dbListItem.setInt('id', list.getItem(index).id);
          dbListItem.setString('title', list.getItem(index).title);
          dbList.addDictionary(dbListItem);
          break;
        case ChangeType.Splice:
          dbList.remove(index);
          break;
      }

      db.save(doc);
    }
  };
}
