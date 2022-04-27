import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setAuthState } from './store/actions';
import { User } from './models';

@Component({
  selector: 'tasker-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store
  ) {
  }

  ngOnInit(): void {
    const userFromLocalStorage: User = JSON.parse(localStorage.getItem('user'));
    if ( !!userFromLocalStorage ) {
      this.store.dispatch(setAuthState({ user: userFromLocalStorage, isLoggedIn: true }));
    } else {
      this.store.dispatch(setAuthState({ user: null, isLoggedIn: false }));
    }
  }
}
