import { Component } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { CardsComponent } from '../../shared/components/cards/cards.component';

@Component({
  selector: 'app-tech-news',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './tech-news.component.html',
  styleUrl: './tech-news.component.scss',
})
export class TechNewsComponent {
  constructor(private service: DataService) {}
  data: [] = [];
  title: string = 'Technology';
  ngOnInit(): void {
    this.service.getTechData().subscribe(
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
