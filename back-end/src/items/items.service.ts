import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/items.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id:"1234",
            name:"Item One",
            qty:100,
            description: "This is item one"
        },
        {
            id:"5678",
            name:"Item Two",
            qty:50,
            description: "This is item two"
        },
    ];

    findAll() : Item[]{
        return this.items;
    }
    findOne(id: string) : Item {
        return this.items.find(item => item.id === id);
    }
}
