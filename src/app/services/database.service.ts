import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Import the dataservice so we can pass in the search term string for our url
import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';

import { Post } from '../models/post'; // Test to connect to db
import { Starships } from '../models/starships';
import { Films } from '../models/films';
import { People } from '../models/people';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  urlPass: string; // Data service message - passing the searchTerm to the different fetch calls
  private dbUrl = 'https://swapi.co/api/';
  private peopleUrl = 'https://swapi.co/api/people/';
  private shipsUrl = 'https://swapi.co/api/starships/';
  private filmsUrl = 'https://swapi.co/api/films/';


  constructor(private http: HttpClient, private data: DataService) {  }
  ngOnInit() { // Initializes the searchterm of the url
    this.data.currentMessage.subscribe(pass => this.urlPass = pass);

    this.peopleUrl = this.peopleUrl + this.urlPass; 

  }


  // These are the different fetch functions we will call 
  getSwapi() : Observable<Post[]> {
    return this.http.get<Post[]>(this.dbUrl);
  }

  // Get People
  getPeople() : Observable<People[]> {
    return this.http.get<People[]>(this.peopleUrl);
  }

  // Get Starships
  getStarships() : Observable<Starships[]> {
    return this.http.get<Starships[]>(this.shipsUrl);
  }

  // Get Films 
  getFilms() : Observable<Films[]> {
    return this.http.get<Films[]>(this.filmsUrl);
  }
}
