import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, LoaderComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  @Input() data: any[] = [];
  @Input() title: string = '';

  loader: boolean = true;

  ngOnInit(): void {
    this.loader = this.data.length === 0;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // If data changes (e.g. new data is provided), set loader to false
    if (changes['data']) {
      if (this.data && this.data.length > 0) {
        this.loader = false;
      } else {
        this.loader = true;
      }
    }
  }
  // truncateTitle(title: string, limit: number = 60): string {
  //   if (title.length > limit) {
  //     return title.substring(0, limit) + '...';
  //   }
  //   return title;
  // }
}
