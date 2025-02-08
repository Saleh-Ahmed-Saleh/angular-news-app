import { Component, OnInit } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  data: any[] = [];
  title: string = 'Top Headlines';

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.service.getTopHeadlines().subscribe(
      (response: any) => {
        console.log(response.articles);
        this.data = response.articles;
      },
      (error) => {
        console.log('Error fetching data', error);
      }
    );
  }
}
