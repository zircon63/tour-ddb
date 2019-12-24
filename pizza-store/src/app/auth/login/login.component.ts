import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AccountService} from '../state';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  authForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AccountService,
              private router: Router) {
    this.authForm = fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onSubmit() {
    this.authService.login(this.authForm.value).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
