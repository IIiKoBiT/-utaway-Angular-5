import { Component, OnInit } from '@angular/core';
import {ApiService} from '@core/api.service';
import {RootCategories} from '../../models/Categories';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private api: ApiService) { }

  categories: RootCategories = new RootCategories();

  ngOnInit()
  {
    // Получение всех категорий
    this.api.getCategories().subscribe((response) =>
    {
      this.categories = RootCategories.fromJSON(response);
    });
  }

  // Изменяем состояние. Только свои эвенты
  onlyMy()
  {
    this.api.flagMe.next(!this.api.flagMe.value);
  }

}
