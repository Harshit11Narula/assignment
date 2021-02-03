import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { EmailValidator, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-details',
  templateUrl: './dialog-details.component.html',
  styleUrls: ['./dialog-details.component.css']
})
export class DialogDetailsComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  leadArray: string[] = new Array();
  infoArray: string[] = new Array();


  squadStack = new FormGroup({
    name: new FormControl(),
    email: new FormControl('',Validators.email),
    phone: new FormControl('',[Validators.required,Validators.pattern("[0-9 ]{11}")]),
    leads: new FormControl('', Validators.required),
    total: new FormControl('', Validators.required),
    crm: new FormControl('', Validators.required),
    agent:  new FormControl('', Validators.required) 
  })

  
  ngOnInit(): void {
    
  }
  onLeadchanges(data: string){
    let index = this.leadArray.indexOf(data);
    if(index>-1){
      this.leadArray = this.leadArray.filter(val => val!==data);
    }else{
      this.leadArray.push(data);
    }
  }
  onInfochanges(data: string){
    let index = this.infoArray.indexOf(data);
    if(index>-1){
      this.infoArray = this.infoArray.filter(val => val!==data);
    }else{
      this.infoArray.push(data);
    }
  }
  onSubmit(){
    let msg = "Name: " + this.squadStack.get("name")?.value + "\n" + "Email: " + this.squadStack.get("email")?.value + "\n" + "Phone No: " + this.squadStack.get("phone")?.value + "\n" + "No. of leads you generate in a month: " + this.squadStack.get("leads")?.value; 
    msg+= "\n" + "Total leads in your CRM: " + this.squadStack.get("total")?.value +"\n CRM used is: " +  this.squadStack.get("crm")?.value+"\n No of Agents: "+ this.squadStack.get("agent")?.value+"\nThe Biggest lead sources: "+ this.leadArray + "\nHear about us by: "+ this.infoArray; 
    alert(msg);
  }

}
