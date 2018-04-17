import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {ApiService} from '@core/api.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private api: ApiService) { }

	canActivate() {

		if (this.api.token !== "")
		{
			return true;
		}
		else
		{
			this.router.navigate(['login']);
			return false;
		}

	}
}
