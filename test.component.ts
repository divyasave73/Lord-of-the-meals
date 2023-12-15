import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: '<h1>Hellooo</h1>',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  test:string = "Divya";
  constructor(){
    this.test = this.test;
  }
 
}
