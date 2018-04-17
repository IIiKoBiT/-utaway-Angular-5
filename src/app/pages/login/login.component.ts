import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../core/api.service';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  public apiUrl:string;
  public auth:boolean = false;

  constructor(private api: ApiService, private router: Router, private cookieService: CookieService)
  {
    this.apiUrl = api.authUrl;
  }

  // Парсинг URLa пользователя
  parse_query_string(query:any) {
    var vars = query.split("&");
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      // If first entry with this name
      if (typeof query_string[pair[0]] === "undefined") {
        query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
      } else if (typeof query_string[pair[0]] === "string") {
        var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
        query_string[pair[0]] = arr;
        // If third or later entry with this name
      } else {
        query_string[pair[0]].push(decodeURIComponent(pair[1]));
      }
    }
    return query_string;
  }

  // Слушаем загрузки iframe что бы отседить момент авторизации пользователя и забрать токен
  public changeUrl(url: any)
  {
    let responseAuth = this.parse_query_string(url['path'][0]['contentDocument']['URL']);
    if(responseAuth['access_token'] !== undefined)
    {
      this.api.token = responseAuth['access_token'];
      this.cookieService.set('token', responseAuth['access_token']);

      this.api.getMeUser().subscribe((response) => {
        this.api.userId = response['id'];
        this.cookieService.set('userId', response['id']);
        this.router.navigate(['category/0']);
      });

    }
  }


  // Запускаем авторизацию
  public authStart()
  {
    this.auth = true;
  }

}
