import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ticker',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ticker.component.html',
  styleUrl: './ticker.component.scss',
})
export class TickerComponent implements OnInit {
  constructor(private service: DataService) {}
  data: any[] = [];

  ngOnInit(): void {
    this.service.getTopHeadlines().subscribe(
      (response: any) => {
        console.log(response.articles);
        this.data = response.articles;
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

  limitedData = this.data.slice(0, 10);
}
