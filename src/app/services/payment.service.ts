import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreditCardPaymentDetails } from '../models/CreditCardPaymentDetails.model';

// 3. Write a Payment service with a function that creates a POST request.

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http: HttpClient,
  ) {}

  private paymentUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  pay(data: CreditCardPaymentDetails) {
    // makes a POST request to some endpoint
    return this.http.post(this.paymentUrl, data);
  }
}