import { Component } from '@angular/core';

import { BigCardComponent } from '../../shared/components/big-card/big-card.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BigCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
