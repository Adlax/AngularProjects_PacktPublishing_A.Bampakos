import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from './weather';
import { environment } from '../environments/environment';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Weather> {
    const options = new HttpParams()
                        .set('units','metric')
                        .set('q',city)
                        .set('appId',environment.apiKey);

    return this.http.get<Weather>(environment.apiUrl+'weather', {params:options});
  }

}
