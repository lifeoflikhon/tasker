import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services';
import { Store } from '@ngrx/store';
import { forgotPassword } from '../../store/actions';

@Component({
  selector: 'tasker-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  requestPasswordReset() {
    if ( this.forgotPasswordForm.invalid ) return;
    const { email } = this.forgotPasswordForm.value;
    this.store.dispatch(forgotPassword({ email }));
  }

}
