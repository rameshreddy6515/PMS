import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostloginComponent } from './postlogin/postlogin.component';
import { PostRegisterComponent } from './post-register/post-register.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ChangePasswordComponent,
    PostloginComponent,
    PostRegisterComponent,
  ],
  imports: [CommonModule],
})
export class AuthModule {}
