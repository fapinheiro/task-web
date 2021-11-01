import { Action } from "@ngrx/store";
import { Item } from "../../model/item.model";

// Place the feature name so that actions can be unique application wide in order to avoid obscure errors
export const ADD_ITEM = '[Item Feature] ADD_ITEM';
// export const ADD_MOVIE = '[Search Featured] ADD_MOVIE';
export const UPDATE_ITEM = '[Item Featured] UPDATE_ITEM';
// export const DELETE_MOVIE = '[Search Featured] DELETE_MOVIE';
// export const START_EDIT = '[Search Featured] START_EDIT';
// export const STOP_EDIT = '[Search Featured] STOP_EDIT';

export class AddItem implements Action {
	readonly type = ADD_ITEM;
	
	constructor(public payload: Item) {}
}

// export class AddMovie implements Action {
// 	readonly type = ADD_MOVIE;
	
// 	constructor(public payload: Movie) {}
// }

export class UpdateItem implements Action {
	readonly type = UPDATE_ITEM;
	
	constructor(public payload: {index: number, item: Item}) {} // The index and the object to be updated
}

// export class DeleteMovie implements Action {
// 	readonly type = DELETE_MOVIE;
	
// 	constructor(public payload: number) {} // The index to be deleted
// }

// export class StarEditMovie implements Action {
// 	readonly type = START_EDIT;
	
// 	constructor(public payload: number) {} // The index to be deleted
// }

// export class StopEditMovie implements Action {
// 	readonly type = STOP_EDIT;
	
// }

// export type MovieActions = SetFeatured | AddMovie | UpdateMovie | DeleteMovie | StarEditMovie | StopEditMovie;

export type ItemActions = AddItem | UpdateItem;
