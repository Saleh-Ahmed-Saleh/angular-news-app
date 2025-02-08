import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiKey, url } from '../../../environment/env';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getTopHeadlines(): Observable<any> {
    return this.http.get(`${url}country=us&${apiKey}&language=en&pageSize=100`);
  }

  getBusinessData(): Observable<any> {
    return this.http.get(`${url}country=us&category=business&${apiKey}`);
  }

  getSportsData(): Observable<any> {
    return this.http.get(
      `${url}country=us&category=sports&${apiKey}&language=en&pageSize=100`
    );
  }
  getTechData(): Observable<any> {
    return this.http.get(
      `${url}category=technology&${apiKey}&language=en&pageSize=100`
    );
  }
  getHealthData(): Observable<any> {
    return this.http.get(
      `${url}category=health&${apiKey}&language=en&pageSize=100`
    );
  }
  getScienceData(): Observable<any> {
    return this.http.get(
      `${url}category=science&${apiKey}&language=en&pageSize=100`
    );
  }
}
