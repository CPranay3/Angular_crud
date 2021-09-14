import { Component, ViewChild } from '@angular/core';

import { CommonService } from './common.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  alert:boolean=false;
  title ='country';
  allUser: Object | any;

  isEdit=false;
  delete:boolean=false;
  edited:boolean=false;

  userObj={
    name:'',
    id:''
  }
  showMsg: boolean=false;
  ngForm: any;


  constructor(private commonService:CommonService){}

 user: any;

  ngOnInit(){
    this.getLatestUser();
  }

  add(formObj: any){
     console.log(formObj);
     this.commonService.createCountry(formObj).subscribe((response)=>{
      this.getLatestUser();
      
     })
     this.alert=true;  
      // After Submitting
      this.userObj.id = '';
      this.userObj.name = '';
  }

  getLatestUser(){
    this.commonService.getAllCountry().subscribe((response)=>{
      this.allUser =response;
      
    })
     
  }

  editCountry(country: { name: string; id: string; description: string; }){
    this.isEdit=true;
    this.userObj= country;
    
  }

  deleteCountry(user: any){
     this.commonService.deleteCountry(user).subscribe(()=>{
      this.getLatestUser();
    })
    this.delete=true;
  }
  updateCountry(){
     this.isEdit= !this.isEdit;
     this.commonService.updateCountry(this.userObj).subscribe(()=>{
      this,this.getLatestUser();
    })
    this.edited=true;
  }
 closeAlert(){
   this.alert=false;
 }
 close(){
  this.delete=false;
  }
  closed(){
    this.edited=false;
  }

  coun(event: any){
    console.log("COUNTRY NAME AND ID IS :  " + event.target.value);

  }
}
