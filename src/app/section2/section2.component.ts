import { Component, OnInit, ViewChild } from '@angular/core';
import { Section2Service } from '@app/section2/section2.service';
import { DxTreeViewComponent, DxTagBoxComponent } from '../../../node_modules/devextreme-angular';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {

  @ViewChild(DxTagBoxComponent) tagBoxView:any;

  tagBoxValue: string;
  tagDataSource: any;
  states:string[];
  codes01:string[];
  codes02:string[];
  codes03:string[];
  codes04:string[];
  codes05:string[];
  codes06:string[];


  constructor(service:Section2Service) { 
   this.states=service.getStates();
   this.codes01=service.getCodes01();
   this.codes02=service.getCodes02();
   this.codes03=service.getCodes03();
   this.codes04=service.getCodes04();
   this.codes05=service.getCodes05();
   this.codes06=service.getCodes06();
  }

  buttonOptions: any = {
    text: "Save",
    type: "success",
    useSubmitBehavior: true
  }

  onFormSubmit = function(e:any) {
    notify({
        message: "You have submitted the form",
        position: {
            my: "center top",
            at: "center top"
        }
    }, "success", 3000);
    
    e.preventDefault();
}
  
  ngOnInit() {
  }

}
