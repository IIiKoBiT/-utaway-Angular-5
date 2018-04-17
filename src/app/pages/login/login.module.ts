import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {SharedModule} from '../../shared/shared.module';
import {AuthGuard} from './guards/auth.guard';
import {NoauthGuard} from './guards/noauth.guard';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [LoginComponent],
  providers: [AuthGuard, NoauthGuard],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
