import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-math',
  //templateUrl: './math.component.html',
  template: `
    <p>
      Component from main Module
    </p>
  `,
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {
 
  constructor() { }
 
  ngOnInit() {
  }
 
}