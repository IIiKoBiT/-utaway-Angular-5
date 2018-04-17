import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { ApiService } from './core/api.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private api: ApiService) {}

  // Перехватываем запросы клонируем о добавляем токен авторизации
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const authToken = this.api.getAuthorizationToken();

    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`)
    });


    return next.handle(authReq);
  }
}
