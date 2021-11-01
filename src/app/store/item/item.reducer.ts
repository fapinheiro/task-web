
import { Item } from '../../model/item.model';
import * as MovieActions from './item.actions'

// Each field must be implemented in the reducer
export interface MyState {
	items: Item[];
}

const initialState: MyState = {
	items: [],
};

export function itemReducer(state: MyState = initialState, action: any) {
	switch (action.type) {
		// case MovieActions.SET_FEATURED:
		// 	return {
		// 		...state, // copy the old state, a good practice
		// 		featured: action.payload // Set the new value
		// 	}
		case MovieActions.ADD_ITEM:
			return {
				...state, // copy the old state, a good practice
				items: [...state.items, action.payload] // Add the new value
			}
		
		case MovieActions.UPDATE_ITEM:
			const item = state.items[action.payload.index];
			const updatedItem = {
				...item,
				...action.payload.item
			}
			const updatedItems = [...state.items];
			updatedItems[action.payload.index] = updatedItem;
			
			return {
				...state,
				items: updatedItems // Set the new value
			}
		// case MovieActions.DELETE_MOVIE:
		// 	return {
		// 		...state,
		// 		movies: state.movies.filter( (offer, index) => { return index !== action.payload; }), 
		// 		editOffer: state.editMovie,
		// 		editOfferIndex: state.editMovieIndex
		// 	}
		// case MovieActions.START_EDIT:
		// 	return {
		// 		...state,
		// 		movies: state.movies,
		// 		editOfferIndex: action.payload,
		// 		editOffer: {...state.movies[action.payload]}
		// 	}	
		// case MovieActions.STOP_EDIT:
		// 	return {
		// 		...state,
		// 		movies: state.movies,
		// 		editOfferIndex: -1,
		// 		editOffer: null
		// 	}	
	    default:
			return state;
	}
}