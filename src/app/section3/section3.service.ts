import { Injectable } from '@angular/core';

export class BranchInfo
{
  ID:number;
  BranchName:string;
  Street:string;
  city:string;
  ZipCode:string;
}

let states:string[]=['Alabama','Alaska','Arkansas','California','Colorado', 
'Connecticut','Delaware','Florida', 'Georgia','Hawaii','Idaho','Illinois', 
'Indiana','Iowa','Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 
'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
'Montana','Nebraska','Nevada','New Hampshire','New Jersey', 'New Mexico', 
'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 
'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin','Wyoming'];

let branchInfo:BranchInfo[]=[{
  "ID":1,
  "BranchName":"",
  "Street":"",
  "city":"",
  "ZipCode":"",
}]

@Injectable({
  providedIn: 'root'
})

export class Section3Service {

  getBranch(): BranchInfo[]{
    return branchInfo;
  }
 getStates(){
   return states;
 }
}
