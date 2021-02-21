import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

/**
 a. Credit Card Number (mandatory, string)
b. Card Holder (mandatory, string)
c. Expiration Date (mandatory, Date, >CurrentDate)
d. Security Code - CCV (optional, string, 3 digits)
e. Amount (mandatory, number, > 0)
https://angular.io/api/forms/Validators
 */
@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  @Output() submitCardDetailsChange = new EventEmitter();
  creditCardDetails = this.fb.group({
    ccNumber: ['', Validators.required],
    cardHolder: ['', Validators.required],
    expirationDate: ['', Validators.required],
    ccv: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(3)])],
    amount: [0, Validators.compose([Validators.required, Validators.min(1)])],
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.warn(this.creditCardDetails.value);
    this.submitCardDetailsChange.emit(this.creditCardDetails.value);
  }
}
