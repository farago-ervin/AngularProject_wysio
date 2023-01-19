import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeComponent } from './components/joke/joke.component';
import { HomeComponent } from './components/home/home.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodolistComponent } from './todolist/todolist.component';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { NgxIndexedDBService } from 'ngx-indexed-db';

const dbConfig: DBConfig  = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [{
    store: 'Todo',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'isCompleted', keypath: 'isCompleted', options: { unique: false } }
    ]
  }]
};

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    HomeComponent,
    WeatherComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxIndexedDBModule.forRoot(dbConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

