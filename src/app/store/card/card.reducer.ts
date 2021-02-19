import { createReducer, on } from '@ngrx/store';
import { setCardDetails } from './card.actions';
 
export const initialState = {
  cardDetails: {},
};
 
const _cardReducer = createReducer(
  initialState,
  on(setCardDetails, (state, action) => ({ ...state, cardDetails: action.payload }))
);

export function cardReducer(state, action) {
  return _cardReducer(state, action);
}
