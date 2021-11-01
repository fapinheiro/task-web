import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as ItemActions from '../../store/item/item.actions';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.scss']
})
export class ItemAddComponent implements OnInit {

  inputTaskValue: string = '';

  constructor(
    private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.onAddTask();
  }

  onAddTask() {
    
    this.store.dispatch(
      new ItemActions.AddItem(
        new Item(3, this.inputTaskValue, false)
      )
    );

    this.inputTaskValue = '';
  }
}
