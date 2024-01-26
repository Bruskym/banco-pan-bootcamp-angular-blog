import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/components/home.component';
import { AboutComponent } from './features/about/about.component';
import { NewsComponent } from './features/news/news.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
  },
  {
    path: 'news/:id',
    component: NewsComponent,
    title: 'News',
  },
];
