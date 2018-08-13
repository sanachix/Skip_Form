import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { Section9Service } from '@app/section9/section9.service';

@Component({
  selector: 'app-section9',
  templateUrl: './section9.component.html',
  styleUrls: ['./section9.component.scss']
})
export class Section9Component implements OnInit {

  constructor(service:Section9Service) { }

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
