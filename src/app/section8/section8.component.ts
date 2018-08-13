import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { Section8Service } from '@app/section8/section8.service';

@Component({
  selector: 'app-section8',
  templateUrl: './section8.component.html',
  styleUrls: ['./section8.component.scss']
})
export class Section8Component implements OnInit {

  states:string[];
  
  constructor(service:Section8Service) { 
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
