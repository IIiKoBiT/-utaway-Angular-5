import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RedirectComponent} from './redirect/redirect.component';
import {AuthGuard} from './login/guards/auth.guard';
import {NoauthGuard} from './login/guards/noauth.guard';
import {CategoryComponent} from './category/category.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent, canActivate: [NoauthGuard]},
  { path: 'redirect/success', component: RedirectComponent},
  { path: 'category/:id', component: CategoryComponent, canActivate: [AuthGuard]},
];



@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [
    AuthGuard,
  NoauthGuard
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModules {
}
