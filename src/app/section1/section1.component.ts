import { Component, OnInit, ViewChild } from '@angular/core';
import {DxFormComponent, DxTreeViewComponent} from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { Section1Service } from '@app/section1/section1.service';



@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})


export class Section1Component implements OnInit {
  /* The following line was fixed by redifing the jszip 
  path in the tconfig file and rebuilding the project with ngx start*/
  @ViewChild(DxFormComponent) form:DxFormComponent;
  @ViewChild(DxTreeViewComponent) treeView:any;
  treeBoxValue: string;
  treeDataSource: any;
  states:string[];
  listData:any;

  dropBoxRules=[{
    type: 'required'
  }]


   

    syncTreeViewSelection() {
      if (!this.treeView) return;

      if (!this.treeBoxValue) {
          this.treeView.instance.unselectAll();
      } else {
          this.treeView.instance.selectItem(this.treeBoxValue);
      }
    }

  treeView_itemSelectionChanged(e:any){
      this.treeBoxValue = e.component.getSelectedNodesKeys();
  }
  rules=[{
    type:'required'
  },
    {type:'numeric'}];
  

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
  constructor(service:Section1Service) { 
    this.states=service.getStates();
    this.treeDataSource=service.getListData();
    this.listData=service.getListData();
    this.treeBoxValue = "1";
  }

  ngOnInit() {
  }

}
