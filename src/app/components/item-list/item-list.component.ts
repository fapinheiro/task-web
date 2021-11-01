import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as ItemActions from '../../store/item/item.actions';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @Input() items: Item[];

  constructor(
    private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
  }

  onItemClicked(index: number, item: Item) {
    this.store.dispatch(
      new ItemActions.UpdateItem(
        {
          index: index,
          item: new Item(item.id, item.name, !item.done)
        }
      )
    );
  }

}
