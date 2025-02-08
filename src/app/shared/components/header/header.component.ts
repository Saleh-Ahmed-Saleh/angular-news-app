import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TickerComponent } from '../ticker/ticker.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, TickerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
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
}
