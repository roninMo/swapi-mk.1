import { Injectable, Inject } from '@angular/core';

// Import Behavior Subject to pass data between components not connected to each other
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({providedIn: 'root'})

export class DataService {

    private messageSource = new BehaviorSubject<string>("default message");
    currentMessage = this.messageSource.asObservable();

    constructor() { }

    changeMessage(message: string) {
        this.messageSource.next(message); 
    }

}