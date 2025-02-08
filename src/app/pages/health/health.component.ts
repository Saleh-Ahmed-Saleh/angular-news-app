import { Component } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { CardsComponent } from '../../shared/components/cards/cards.component';

@Component({
  selector: 'app-health',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './health.component.html',
  styleUrl: './health.component.scss',
})
export class HealthComponent {
  constructor(private service: DataService) {}
  data: [] = [];
  title: string = 'Health';
  ngOnInit(): void {
    this.service.getHealthData().subscribe(
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
