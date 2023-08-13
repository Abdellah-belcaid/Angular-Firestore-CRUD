import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { Item } from '../model/Item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(private afs: AngularFirestore) {
    // Initialize a reference to the Firestore collection named 'Items'
    this.itemsCollection = afs.collection<Item>('Items', ref => ref.orderBy('title', 'asc'));

    //this.items = this.itemsCollection.valueChanges();

    // Use the snapshotChanges() method to get an Observable of document snapshots
    this.items = this.itemsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Item;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  getItems() {
    return this.items;
  }

  addItem(item: Item) {
    return this.itemsCollection.add(item);
  }

  updateItem(id: string, item: Item) {
    return this.itemsCollection.doc(id).update(item);
  }

  deleteItem(id: string ) {
    return this.itemsCollection.doc(id).delete();
  }
}


