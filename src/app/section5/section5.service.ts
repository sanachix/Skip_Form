import { Injectable } from '@angular/core';


export class ProjectInfo
{
  ID:number;
  ProjectName:string;
  OwnerRep:string;
  Phone:string;
  ArchitectPhone:string;
  Status:string; // could be replace with string[] if status is a fixed list
  Reference:string;
  Schedulde:string;
  TypOfProj:string;
  
}

let projectInfo:ProjectInfo[]=[{
  "ID":1,
  "ProjectName":"",
  "OwnerRep":"",
  "Phone":"",
  "ArchitectPhone":"",
  "Status":"",
  "Reference":"",
  "Schedulde":"",
  "TypOfProj":"",
  
}]

@Injectable({
  providedIn: 'root'
})
export class Section5Service {

  getProject(): ProjectInfo[]{
    return projectInfo;
  }
}
