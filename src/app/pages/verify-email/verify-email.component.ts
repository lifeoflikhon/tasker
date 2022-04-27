import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { Store } from '@ngrx/store';
import { verifyEmail } from '../../store/actions';

@Component({
  selector: 'tasker-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
  }

  sendVerificationEmail() {
    this.store.dispatch(verifyEmail());
  }

}
