import { Component } from '@angular/core';

import { PageTitleCardComponent } from './page-title-card/page-title-card.component';
import { BigCardComponent } from '../../../shared/components/big-card/big-card.component';
import { SmallCardComponent } from '../../../shared/components/small-card/small-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageTitleCardComponent, BigCardComponent, SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
