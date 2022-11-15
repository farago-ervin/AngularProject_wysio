import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Joke } from 'src/app/interfaces/joke';
import { JokeService } from 'src/app/service/joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  //joke!:Joke;
  joke$: Observable<Joke> = of()
  constructor(private readonly jokeService:JokeService) { }

  ngOnInit(): void {
    /*this.JokeService.getRandomJoke().subscribe((joke: Joke)=>{
      this.joke = joke
    })*/
    
    this.joke$ = this.jokeService.getRandomJoke()
  }

}
