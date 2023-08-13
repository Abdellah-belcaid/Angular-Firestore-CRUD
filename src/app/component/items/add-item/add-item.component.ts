import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/Item.model';
import { ItemsService } from 'src/app/service/items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  newItem: Item = { title: '', description: '' };

  constructor(private itemService: ItemsService) { }

  ngOnInit(): void {
  }

  addItem(): void {

    this.itemService.addItem(this.newItem).then(() => {
      this.newItem = { title: '', description: '' }; // Clear form after adding
      alert('Item added successfully.');
    }).catch(error => {
      alert('Error adding item:' + error);
    });
  }
}
