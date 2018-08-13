import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { Section10Service } from '@app/section10/section10.service';

@Component({
  selector: 'app-section10',
  templateUrl: './section10.component.html',
  styleUrls: ['./section10.component.scss']
})
export class Section10Component implements OnInit {

  states:string[];

  constructor(service:Section10Service) { 
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
