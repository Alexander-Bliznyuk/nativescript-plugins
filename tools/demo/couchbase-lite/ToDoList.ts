import { Observable, ObservableArray, prompt} from "@nativescript/core";


export default class ToDoList extends Observable {
  list: ObservableArray<ListItem>;
  listName: string;
  itemsType: typeof ListItem;

  constructor(list: ObservableArray<ListItem>, listName: string, itemsType: typeof ListItem) {
    super();
    this.list = list;
    this.listName = listName;
    this.itemsType = itemsType;
  }

  async add() {
    const title = (await prompt('What are you going to buy?')).text;
    if (!title) {
      return;
    }

    this.list.push(new this.itemsType(title));
  }

  remove = async ({object}) => {
    const index = this.list.findIndex(item => item.id === object.id);
    this.list.splice(index, 1);
  };
}

export class ListItem {
  id: number;
  title: string;

  constructor(title, id?) {
    this.title = title;
    this.id = id;
  }
}
