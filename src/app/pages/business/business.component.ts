import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './business.component.html',
  styleUrl: './business.component.scss',
})
export class BusinessComponent implements OnInit {
  constructor(private service: DataService) {}
  data: [] = [];
  title: string = 'Business News';

  ngOnInit(): void {
    this.service.getBusinessData().subscribe(
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
