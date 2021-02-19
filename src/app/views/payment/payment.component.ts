import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CreditCardPaymentDetails } from 'src/app/models/CreditCardPaymentDetails.model';
import { PaymentService } from 'src/app/services/payment.service';
import { setCardDetails } from 'src/app/store/card/card.actions';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  creditCard: CreditCardPaymentDetails;

  constructor(
    private paymentService: PaymentService,
    private store: Store,
  ) {}

  ngOnInit(): void {
  }

  onSubmitCardDetails(data: any) {
    // Store the data in the store
    // Call the payment service to post the data
    const transformed = new CreditCardPaymentDetails(data.ccNumber, data.cardHolder, data.expirationDate, data.amount, data.ccv);
    this.paymentService.pay(transformed).subscribe();
    this.store.dispatch(setCardDetails({ payload: transformed }));

    // 
  }
}
