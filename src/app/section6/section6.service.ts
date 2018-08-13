import { Injectable } from '@angular/core';
export class OSHA_300A
{
  _:string;
  Ref:string; //this is actually the form text but to create a blank column header it is set to this
}

export class EMRData
{
  year:number;
  EMR:string;
}

export class Violations
{
  year:number;
  Violation:string;
}


let emrData:EMRData[]=[{
  "year":0,
  "EMR":""
},{"year":0,"EMR":""},{"year":0,"EMR":""}]

let violationsData:Violations[]=[{
  "year":0,
  "Violation":""
},{"year":0,"Violation":""},{"year":0,"Violation":""}]

let osha_300a:OSHA_300A[]=[{"_":"Number of fatalities","Ref":"Line 'G' on OSHA 300A Form"},
{"_":"Number of lost workday cases ","Ref":"Line 'H' on OSHA 300A Form"},
{"_":"Number of lost workday cases","Ref":"Line 'I' on OSHA 300A Form"},
{"_":"Number of other recordable cases","Ref":"Line 'J' on OSHA 300A Form"},
{"_":"Total hours worked by all employees","Ref":""},
{"_":"OSHA Total Recordable Incidence Rate (TRIR)",
"Ref":"(Line 'H' + Line 'I' + Line 'J') x 200,000,divided by total employee hours worked"},
{"_":"OSHA Total Recordable Incidence Rate (TRIR)",
"Ref":"Line 'H' X 200,000 divided by total employee hours worked"}]

@Injectable({
  providedIn: 'root'
})
export class Section6Service {

  getOSHA_300A(){
    return osha_300a
  }

  getEMRData(){
    return emrData
  }

  getViolations(){
    return violationsData
  }
}
