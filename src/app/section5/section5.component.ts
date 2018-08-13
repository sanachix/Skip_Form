import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { Section5Service } from '@app/section5/section5.service';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.scss']
})
export class Section5Component implements OnInit {
  project:any[];

  constructor(service:Section5Service) {
    this.project=service.getProject();
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
