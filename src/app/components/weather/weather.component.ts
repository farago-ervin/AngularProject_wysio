import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Weather } from '../../interfaces/weather';
import { WeatherService } from '../../service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather$:Observable<Weather> = of()
  currentCity = "";
  constructor(private readonly weatherService:WeatherService) { }

  ngOnInit(): void {
    

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };


    navigator.geolocation.getCurrentPosition(pos=>{
      this.weather$ = this.weatherService.getWeather(pos.coords.latitude,pos.coords.longitude)
    }, error=>{
      console.log(error)
    }, options);
    
  }
  

  loadWeather() {
    this.weather$ = this.weatherService.getWeatherbycity(this.currentCity)
  }
}
