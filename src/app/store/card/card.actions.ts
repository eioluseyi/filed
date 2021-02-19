import { createAction, props } from '@ngrx/store';
import { CreditCardPaymentDetails } from 'src/app/models/CreditCardPaymentDetails.model';

export const setCardDetails = createAction('Set Card Details', props<{ payload: CreditCardPaymentDetails }>());
