import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Import the test swapi service 
import { DatabaseService } from '../app/services/database.service';
// Passing data from the form to here, then to a service to pass our search-terms to the fetchCall
import { DataService } from '../app/services/data.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ConstantPool } from '@angular/compiler';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit {
  title = 'Star Wars API Search';

  swapiSearch: FormGroup; // User search for fetch >Form Stuff< : : : get's formatted into an array
  searchTerms = []; // Holds form of our search data

  category: string = ''; // Handles the category selector part of the url 
  urlPass: string; // Data service message - passing the searchTerm to the different fetch calls
  urlSearch: string; // This is for passing the searchterm in with the data

  // Fetch data
  articles: any; // Test function intro to swapi site

  /*********************
   * Initialization 
  *********************/
 constructor( private dbService: DatabaseService, private data: DataService, private fb: FormBuilder,) {
   
 }

 ngOnInit() {
   this.swapiSearch = this.fb.group({
     userSearch: new FormControl()
   });

   // Data passed to fetch calls after formcontrol
   this.data.currentMessage.subscribe(pass => this.urlPass = pass);
    // Now we can create a function and type this.data.changemessage
 }



 // This is form data of swapiSearch being put into the searchTerms var 
 searchInfo() : void {
   this.searchTerms = this.swapiSearch.value.userSearch;
  //  console.log('search terms: ', this.searchTerms);
  
   this.urlSearch = "?search=" + this.searchTerms; // This is the search endpoint to add to fetches
   console.log(this.urlSearch);

   this.data.changeMessage(this.urlSearch) // passing it to fetch db service Component
   console.log('url pass',this.urlPass);

  this.fetchControl();
 }

 
 

  /*********************
   * Functions 
  *********************/
    // Functions handling the category selector
  clickPeople() {
    this.category = "people";
    console.log(this.category);

  }
  clickShips() {
    this.category = "starships";
    console.log(this.category);

  }
  clickFilms() {
    this.category = "films";
    console.log(this.category);
  }




        // Fetch stuff

    // Testing out new model-Observable/dbService for a fetch return
  findSwapi() : void { 
    this.dbService.getSwapi().subscribe(articles => {
      this.articles = articles;
      // this.articles.reverse(); // Reverse the order the info is returned
    })
    console.log('swapi data', this.articles);
  }



              // This is what handles which of the fetch calls we will call 
      fetchControl() {
        if(this.category == 'people') {
          this.peopleFetch();

        } else if (this.category == 'starships') {
          this.shipFetch();

        } else if (this.category == 'films') {
          this.filmFetch();

        }
      }
    


  // People fetch!
  peopleFetch() : void { 
    this.dbService.getPeople().subscribe(people => {
      console.log('people', people);
      this.articles = people;
      this.articles = this.articles.results;
      console.log(this.articles)
    })
    console.log('people fetch call!', this.articles);
  }

  // Ship fetch!
  shipFetch() : void {
    this.dbService.getStarships().subscribe(ships => {
      console.log('people', ships);
      this.articles = ships;
      this.articles = this.articles.results;
      console.log(this.articles)
    })
    console.log('ship fetch call!', this.articles)
  }

  // Film fetch!
  filmFetch() : void { 
    this.dbService.getFilms().subscribe(films => {
      console.log('people', films);
      this.articles = films;
      this.articles = this.articles.results;
      console.log(this.articles)
    })
  }



}

