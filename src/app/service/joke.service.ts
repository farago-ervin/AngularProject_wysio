import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from '../interfaces/joke';
import { Observable } from 'rxjs';
import { NgIf } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private readonly httpClient:HttpClient ) { }

  getRandomJoke():Observable<Joke>{
    return this.httpClient.get<Joke>(environment.jokeBaseurl + "jokes/random")
  }
}
