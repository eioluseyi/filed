import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aptest';
  storeSubscription;

  public cardDetails$ = this.store.select((state) => state.cards.cardDetails);

  constructor(
    private store: Store<any>,
  ) {}
}
