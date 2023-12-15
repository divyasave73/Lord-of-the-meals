import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {
  username:string = ''

  constructor(){
    this.username = this.username;
  }
  submit(myForm:NgForm){
    console.log("Form submitted",myForm);
  }
  
}
