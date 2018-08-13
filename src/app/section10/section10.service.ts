import { Injectable } from '@angular/core';

let states:string[]=['Alabama','Alaska','Arkansas','California','Colorado', 
'Connecticut','Delaware','Florida', 'Georgia','Hawaii','Idaho','Illinois', 
'Indiana','Iowa','Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 
'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
'Montana','Nebraska','Nevada','New Hampshire','New Jersey', 'New Mexico', 
'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 
'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin','Wyoming'];

@Injectable({
  providedIn: 'root'
})
export class Section10Service {

  getStates(){
    return states;
  }
}
