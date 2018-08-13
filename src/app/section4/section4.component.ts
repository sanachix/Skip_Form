import { Component, OnInit, ViewChild } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { Section4Service } from '@app/section4/section4.service';
import { DxLookupComponent } from '../../../node_modules/devextreme-angular';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss']
})
export class Section4Component implements OnInit {
  //@ViewChild(DxLookupComponent) lookUpView:any
  states:string[];
  //lookUpViewValue:any;

  constructor(service:Section4Service) {
    this.states=service.getStates();

  }


    buttonOptions: any = {
    text: "Save",
    type: "success",
    useSubmitBehavior: true
  }


  /*syncLookUpViewSelection() {
    if (!this.lookUpView) return;

    if (!this.lookUpViewValue) {
        this.lookUpView.instance.unselectAll();
    } else {
        this.lookUpView.instance.selectItem(this.lookUpViewValue);
    }
  }*/

 /* lookUpView_itemSelectionChanged(e:any){
    this.lookUpViewValue = e.component.getSelectedNodesKeys();
  }*/

 
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
