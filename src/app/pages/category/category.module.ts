import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import {SidebarModules} from '../sidebar/sidebar.modules';
import {InfiniteScrollModule} from 'angular2-infinite-scroll';
import {LoadingModule} from 'ngx-loading';

@NgModule({
  imports: [
    CommonModule,
    SidebarModules,
    InfiniteScrollModule,
    LoadingModule
  ],
  declarations: [CategoryComponent],
  exports: [
    CategoryComponent
  ]
})
export class CategoryModule { }
