import { Component, OnInit, ViewChild } from '@angular/core';
import {DxFormComponent} from 'devextreme-angular';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {
  //@ViewChild(DxFormComponent) form:DxFormComponent;

  constructor() { }

  ngOnInit() {
  }

}
