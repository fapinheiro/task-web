import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Item } from '../model/item.model';
import * as fromApp from '../store/app.reducer';
import * as ItemActions from '../store/item/item.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  items: Item[] = [];
  itemSubscription!: Subscription;

  constructor(
    private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.itemSubscription = this.store
      .select('items')
      .subscribe(
        data => this.items = data.items
      );

    this.store.dispatch(
      new ItemActions.AddItem(
        new Item(1, 'Fazer pedido da pizza', false)
      )
    );

    this.store.dispatch(
      new ItemActions.AddItem(
        new Item(2, 'Fazer pedido da TAP', true)
      )
    );
  }

  ngOnDestroy(): void {
    this.itemSubscription.unsubscribe();
  }
}
