import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {ApiService} from '@core/api.service';

@Injectable()
export class NoauthGuard implements CanActivate {
  constructor(private router: Router, private api: ApiService) { }

  canActivate() {

    if (this.api.token !== "")
    {
      this.router.navigate(['home']);
      return false;
    }
    else
    {
      return true;
    }
  }
}
