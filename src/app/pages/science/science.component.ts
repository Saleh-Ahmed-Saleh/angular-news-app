import { Component } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { CardsComponent } from '../../shared/components/cards/cards.component';

@Component({
  selector: 'app-science',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './science.component.html',
  styleUrl: './science.component.scss',
})
export class ScienceComponent {
  constructor(private service: DataService) {}
  data: [] = [];
  title: string = 'science';
  ngOnInit(): void {
    this.service.getScienceData().subscribe(
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
