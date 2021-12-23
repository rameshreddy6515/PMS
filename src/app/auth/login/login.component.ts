import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userLoginForm: FormGroup = new FormGroup({
    // email: new FormControl(''),
    // password: new FormControl(''),
  });
  hide = false;
  constructor(
    private dialogRef: MatDialog,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userLoginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }
  openRegsterDialog() {
    this.dialogRef.open(RegisterComponent, {});
  }
  onLogin() {
    let email: string = this.userLoginForm.value.email;
    let password: string = this.userLoginForm.value.password;

    let result = this.authService.login(email, password);
    console.log('email = ' + email + ' password = ' + password);
    if (result) {
      // navigate to post-login
      this.router.navigate(['/postlogin']);
    } else {
      alert('Loged failed, try again!');
    }
  }
  openDialog() {
    this.dialogRef.open(ChangePasswordComponent, {
      width: '333px',
    });
  }
}
