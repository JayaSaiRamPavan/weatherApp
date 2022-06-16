import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  weatherApiBaseUrl: string = "https://community-open-weather-map.p.rapidapi.com/weather";
  XRapidAPIHostHeaderName : string = 'X-RapidAPI-Host';
  XRapidAPIHostHeaderValue: string = 'community-open-weather-map.p.rapidapi.com';
  XRapidAPIKeyHeaderName: string =  'X-RapidAPI-Key';
  XRapidAPIKeyHeaderValue: string = 'bc8259907emsh71aa472ff884e5fp12bea3jsn40df2b235554';
  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(this.weatherApiBaseUrl, {
      headers: new HttpHeaders()
      .set(this.XRapidAPIHostHeaderName, this.XRapidAPIHostHeaderValue)
      .set(this.XRapidAPIKeyHeaderName, this.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('mode', 'json')
    })
  }
}