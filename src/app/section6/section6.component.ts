import { Component, OnInit } from '@angular/core';
import { Section6Service } from '@app/section6/section6.service';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.scss']
})
export class Section6Component implements OnInit {

  osha_300a:any[];
  emrData:any[];
  violationsData:any[];
  defaultVisible: boolean;

  constructor(service:Section6Service) { 
    this.osha_300a=service.getOSHA_300A();
    this.defaultVisible = false;
    this.emrData=service.getEMRData();
    this.violationsData=service.getViolations();
  }

  //this Moves the iconedit system to the far right of the grid
  onContentReady(e:any) {
    e.component.columnOption("command:edit", {
        visibleIndex: -1
    });
}

toggleDefault() {
  this.defaultVisible = !this.defaultVisible;
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
