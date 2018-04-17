import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiService} from './api.service';
import {  HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [ApiService],
  exports: [

  ]
})
export class CoreModule { }
