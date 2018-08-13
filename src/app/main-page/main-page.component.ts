import { Component, OnInit } from '@angular/core';


//var Page;
var test= false;

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})


export class MainPageComponent implements OnInit {
  Page:number;
  constructor() { }


  ngOnInit() {
  }

}
