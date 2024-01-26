import { Injectable } from '@angular/core';

import { News } from '../../types/news/news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  readonly baseUrl: string = 'http://localhost:3000/news';

  async getNews(): Promise<News[]> {
    const data = await fetch(this.baseUrl);
    return (await data.json()) ?? [];
  }

  async getNewsById(id: number): Promise<News> {
    const url = `${this.baseUrl}/${id}`;
    const data = await fetch(url);

    return data.json();
  }
}
