import { Component, OnInit } from '@angular/core';
import { Section3Service } from '@app/section3/section3.service';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {

  branch:any[];
  states:string[];
  

  constructor(service:Section3Service) {
    this.branch=service.getBranch();
    this.states=service.getStates();
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
