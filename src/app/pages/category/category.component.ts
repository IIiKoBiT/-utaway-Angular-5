import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '@core/api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {RootEvents} from '../../models/Events';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy {

  constructor(private api: ApiService, private route: ActivatedRoute)
  {

  }

  public categoryId:string;
  public events:RootEvents = new RootEvents();
  public lastPage = 1;
  public flagLoad = false;
  public subscriberMeEvent;

  ngOnInit()
  {

    // Получаем id категории из URLa и достаем эвенты
    this.route.params.subscribe(params => {
      this.categoryId = params['id'];
      this.flagLoad = true;
      this.api.eventSearch(1, this.categoryId, this.api.flagMe.value).subscribe((response) => {
        this.events = response;
        this.flagLoad = false;
        this.defaultState();
      });
    });


    // Подписываемся на событие получения только своих эвентов и достаем только свои
    this.subscriberMeEvent = this.api.flagMe.subscribe((value) => {
      this.flagLoad = true;
      this.api.eventSearch(1, this.categoryId, value).subscribe((response) => {
        this.events = response;
        this.flagLoad = false;
        this.defaultState();
      });
    });

  }

  // Инициализация состояния по умолчанию
  defaultState()
  {
    this.lastPage = 1;
    window.scrollTo(0, 0);
  }


  // Обработка инфинити скролла
  onScroll()
  {
    if(this.events.pagination.page_number + 1 != this.lastPage)
    {
      this.lastPage++;
      this.flagLoad = true;
      this.api.eventSearch(this.events.pagination.page_number + 1, this.categoryId, this.api.flagMe.value).subscribe((response) => {
        this.events.events = this.events.events.concat(response.events);
        this.events.pagination = response.pagination;
        this.flagLoad = false;
      });
    }

  }

  // Отписываемся от прослушки
  ngOnDestroy()
  {
    this.subscriberMeEvent.unsubscribe();
  }

}
