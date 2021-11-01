import * as fromItem from './item/item.reducer'
import { ActionReducerMap } from '@ngrx/store'

export interface AppState  {
	items: fromItem.MyState;
	// Add more stores here
}

export const appReducer: ActionReducerMap<AppState> = {
	items: fromItem.itemReducer,
	// Add more stores here
}
