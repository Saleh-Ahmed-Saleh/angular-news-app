import { Component } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { CardsComponent } from '../../shared/components/cards/cards.component';

@Component({
  selector: 'app-sports-news',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './sports-news.component.html',
  styleUrl: './sports-news.component.scss',
})
export class SportsNewsComponent {
  constructor(private service: DataService) {}
  data: [] = [];
  title: string = 'Sports';
  ngOnInit(): void {
    this.service.getSportsData().subscribe(
      (res) => {
        this.data = res.articles;
        console.log(this.data);
      },
      (error) => {
        error.message;
      }
    );
  }
}
