import {Component, OnInit} from '@angular/core';
import {ApiService} from '@core/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private api: ApiService, private router: Router)
  {

  }

}
