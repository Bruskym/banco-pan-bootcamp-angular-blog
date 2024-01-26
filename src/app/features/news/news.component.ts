import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { News } from '../../types/news/news';

import { NewsService } from '../../core/services/news.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
})
export class NewsComponent {
  newsService = inject(NewsService);
  route = inject(ActivatedRoute);

  newsId: number = -1;

  newsData: News | undefined;

  constructor() {
    this.newsId = parseInt(this.route.snapshot.params['id'], 10);

    this.newsService.getNewsById(this.newsId).then((data) => {
      this.newsData = data;
    });
  }
}
