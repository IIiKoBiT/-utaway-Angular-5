import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {SidebarModules} from '../sidebar/sidebar.modules';

@NgModule({
  imports: [
    CommonModule,
    SidebarModules
  ],
  declarations: [HomeComponent],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
