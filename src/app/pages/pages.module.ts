import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import {PagesRoutingModules} from './pages-routing.modules';
import {RedirectModule} from './redirect/redirect.module';
import {SidebarModules} from './sidebar/sidebar.modules';
import {CategoryModule} from './category/category.module';
import {LoadingModule} from 'ngx-loading';







@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    HomeModule,
    CategoryModule,
    RedirectModule,
    PagesRoutingModules,
    LoadingModule
  ],
  exports: [
    CommonModule,
    LoginModule,
    HomeModule,
    CategoryModule,
    RedirectModule,
    SidebarModules,

  ],
  declarations: []

})
export class PagesModule { }
