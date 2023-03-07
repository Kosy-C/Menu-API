import { BaseItem, Item } from "./item.interface";
import { Items } from "./items-interface";

let items : Items = {
    1: {
        id: 1,
        name: "Burger",
        price: 599,
        description: "Tasty",
        image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
    },
    2: {
        id: 2,
        name: "Pizza",
        price: 299,
        description: "Cheesy",
        image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
    },
    3: {
        id: 3,
        name: "Tea",
        price: 199,
        description: "Informative",
        image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
    }
};

export const findAll = async (): Promise<Item[]> => Object.values(items);
//findAll returns the whole items store object

export const find = async (id: number): Promise<Item> => items[id];
//find receives an id parameter that it uses to look up and return a single store element if found.

export const create = async (newItem: BaseItem): Promise<Item> => {
    const id = new Date().valueOf();
  
    items[id] = {
      id,
      ...newItem,
    };
  
    return items[id];
  };
  /*The create method is simple: it receives an object of 
  type BaseItem as an argument, providing all the required 
  values to define a new item in the store, except the item's 
  id. To create a unique id value for each new element added 
  to the store, you use the value of the current Date, based 
  on the number of milliseconds between 1 January 1970 00:00:00 
  UTC and the current time. */

  export const update = async (
    id: number,
    itemUpdate: BaseItem
  ): Promise<Item | null> => {
    const item = await find(id);
  
    if (!item) {
      return null;
    }
  
    items[id] = { id, ...itemUpdate };
  
    return items[id];
  };
/*The update method receives the item id property and an 
itemUpdate object as arguments. You use the id to find 
the item in the store to update it wit the properties of 
itemUpdate. If the store doesn't have the item, you return null. */

export const remove = async (id: number): Promise<null | void> => {
    const item = await find(id);
  
    if (!item) {
      return null;
    }
  
    delete items[id];
  };
/*The remove method receives an id value as a parameter
 and uses it to look up an item in the store and to 
 delete it if found. */
 