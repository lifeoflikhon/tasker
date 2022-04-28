import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/store/actions';
import { selectCurrentAuth } from '../../store/selectors';

@Component({
  selector: 'tasker-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  currentUser$ = this.store.select(selectCurrentAuth);

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.store.dispatch(logout())
  }
}
