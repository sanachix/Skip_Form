import { Component, OnInit } from '@angular/core';
import { Section7Service } from '@app/section7/section7.service';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-section7',
  templateUrl: './section7.component.html',
  styleUrls: ['./section7.component.scss']
})
export class Section7Component implements OnInit {

  YesNo:string[];

  constructor(service:Section7Service) {
    this.YesNo=["Yes","No"];
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
