import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ThemeService } from '../../../shared/services/theme.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  themeService: ThemeService = inject(ThemeService);

  alternateTheme() {
    this.themeService.toggleTheme();
  }
}
