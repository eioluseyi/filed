import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CreditCardPaymentDetails } from 'src/app/models/CreditCardPaymentDetails.model';
import { PaymentService } from 'src/app/services/payment.service';
import { setCardDetails } from 'src/app/store/card/card.actions';
import { ToastrService } from 'ngx-toastr';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css', ]
})
export class PaymentComponent implements OnInit {
  creditCard: CreditCardPaymentDetails;

  constructor(
    private paymentService: PaymentService,
    private store: Store,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  showSuccess(msg: any) {
    this.toastr.success(msg, 'Success');
  }

  showError(msg: string) {
    this.toastr.error(msg, 'Error');
  }

  onSubmitCardDetails(data: any) {
    // Store the data in the store
    const transformed = new CreditCardPaymentDetails(data.ccNumber, data.cardHolder, data.expirationDate, data.amount, data.ccv);
    // console.log(transformed);
    this.store.dispatch(setCardDetails({ payload: transformed }));
    // Call the payment service to post the data
    this.paymentService.pay(transformed).subscribe(
      (data) => this.showSuccess(data['message'] ? data['message'] : JSON.stringify(data)),
      (error) => this.showError(error.message)
    );

  }
}
