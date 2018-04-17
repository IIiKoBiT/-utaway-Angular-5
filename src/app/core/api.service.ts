import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '@env/environment';
import 'zone.js';
import 'reflect-metadata';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import {RootCategories} from '../models/Categories';
import {RootEvents} from '../models/Events';
import {CookieService} from 'ngx-cookie-service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class ApiService {

  public static url: string = 'https://www.eventbriteapi.com/v3/';
  public authUrl = environment.authUrl;
  public token = "";
  public userId = "";
  public static token: string = null;
  public flagMe = new BehaviorSubject(false);



  constructor(private http: HttpClient, private cookieService: CookieService)
  {
    this.token = this.cookieService.get('token');
    this.userId = this.cookieService.get('userId');
  }

  // Получение данніх о владельце аккаунта
  public getMeUser(): Observable<RootCategories> {
    return  this.http.get<RootCategories>(ApiService.url + 'users/me/')
      .catch((error: any) => { return Observable.throw(error); });
  }

  // Получение категорий
  public getCategories(): Observable<RootCategories> {
    return  this.http.get<RootCategories>(ApiService.url + 'categories/')
      .catch((error: any) => { return Observable.throw(error); });
  }

  // Получение эвентов
  public eventSearch(numPage: number, categories:string, onlyMy = false): Observable<RootEvents> {
    let params = new HttpParams();
    params = params.set('page', numPage.toString());

    // Если выбрана какая то из катигорий
    if(categories != '')
      params = params.set('categories', categories);

    // Если нужно получить только свои эвенты
    if(onlyMy === true)
      params = params.set('user.id', this.userId);

    return  this.http.get<RootEvents>(ApiService.url + 'events/search/', {params})
      .catch((error: any) => { return Observable.throw(error); });
  }


  // Получение токена
  public getAuthorizationToken()
  {
    return this.token;
  }

}
