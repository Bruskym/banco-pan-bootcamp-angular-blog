import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageTitleCardComponent } from './page-title-card/page-title-card.component';
import { BigCardComponent } from '../../../shared/components/big-card/big-card.component';
import { SmallCardComponent } from '../../../shared/components/small-card/small-card.component';

import { News } from '../../../types/news/news';
import { NewsService } from '../../../core/services/news.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PageTitleCardComponent,
    BigCardComponent,
    SmallCardComponent,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  newsService: NewsService = inject(NewsService);

  Cards: News[] = [];
  smallCards: News[] = [];

  constructor() {
    this.newsService.getNews().then((newsList: News[]) => {
      this.Cards = newsList;
      this.smallCards = this.Cards.slice(1);
    });
  }
}
