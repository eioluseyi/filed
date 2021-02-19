import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PaymentComponent } from './views/payment/payment.component';
import { HomeComponent } from './views/home/home.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';

import { PaymentService } from './services/payment.service';
import { StoreModule } from '@ngrx/store';
import { cardReducer } from './store/card/card.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    HomeComponent,
    PaymentFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ cards: cardReducer }, {}),
    StoreModule.forRoot({}, {})
  ],
  providers: [
    PaymentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
