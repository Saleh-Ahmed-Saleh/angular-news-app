import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TickerComponent } from '../ticker/ticker.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TickerComponent, NgClass, NgFor],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  links = [
    { name: 'Home', link: 'home' },
    { name: 'Business', link: 'business' },
    { name: 'Sports', link: 'sports' },
    { name: 'Health', link: 'health' },
    { name: 'Technology', link: 'technology' },
    { name: 'Science', link: 'science' },
  ];

  isNavbarCollapsed = true;

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
