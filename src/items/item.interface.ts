export interface BaseItem {
    name: string;
    price: number;
    description: string;
    image: string
}

export interface Item extends BaseItem {
    id: number
}

/*
There will be scenarios where you only need to assert the item's structure without 
its id, such as when you get a payload to create a new item 
or update an existing one. In those types of requests, POST and PUT,
the client sends the item id as a query parameter. 
For those cases, you'll use the BaseItem interface.
*/