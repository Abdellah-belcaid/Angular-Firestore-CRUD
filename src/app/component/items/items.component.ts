import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/Item.model';
import { ItemsService } from 'src/app/service/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  editState = false;
  itemToEdit!: Item;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.getItems();
  }

  async deleteItem(event: any, item: Item): Promise<void> {
    if (!item.id) {
      alert('Item ID is missing.');
      return;
    }

    try {
      await this.itemsService.deleteItem(item.id);
      this.getItems();
      alert('Item has been deleted successfully');
    } catch (error) {
      alert('Error deleting item: ' + error);
    }
  }

  editItem(event: Event, item: Item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  async updateItem(item: Item): Promise<void> {
    if (!item.id) {
      alert('Item ID is missing.');
      return;
    }

    try {
      await this.itemsService.updateItem(item.id, item);
      this.editState = false;
      alert('Item updated successfully');
    } catch (error) {
      alert('Error updating item: ' + error);
    }
  }

  private getItems(): void {
    this.itemsService.getItems().subscribe(
      items => (this.items = items),
      error => console.error('Error fetching items:', error)
    );
  }
}
