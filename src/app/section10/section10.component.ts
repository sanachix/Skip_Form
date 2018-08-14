import { Component, OnInit,ViewChild } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { Section10Service } from '@app/section10/section10.service';
import { SignaturePad } from 'angular2-signaturepad/signature-pad'

@Component({
  selector: 'app-section10',
  templateUrl: './section10.component.html',
  styleUrls: ['./section10.component.scss'],
  
})
export class Section10Component implements OnInit {
  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  states:string[];

  
  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 0.5,
    'maxWidth': 1,
    'canvasWidth': 500,
    'canvasHeight': 100,
    'dotSize': 0.5,
    'minDistance': 1
  };
 

  constructor(service:Section10Service) { 
    this.states=service.getStates();
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
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
