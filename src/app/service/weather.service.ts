import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgIf } from '@angular/common';
import { Weather } from '../interfaces/weather';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private readonly httpClient:HttpClient) { }

  getWeather(latitude:number,longitude:number):Observable<Weather> {
    let params = new HttpParams();
    params = params.append("appid",environment.weatherAPIkey);
    params = params.append("lat",latitude)
    params = params.append("lon",longitude)

    return this.httpClient.get<Weather>(environment.weatherBaseurl,{params: params})
  }

  getWeatherbycity(city:string):Observable<Weather> {
    let params = new HttpParams();
    params = params.append("appid",environment.weatherAPIkey);
    params = params.append("q",city)

    return this.httpClient.get<Weather>(environment.weatherBaseurl,{params: params})
  }


}
