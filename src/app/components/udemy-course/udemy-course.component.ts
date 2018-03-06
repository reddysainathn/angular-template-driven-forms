import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-udemy-course',
  templateUrl: './udemy-course.component.html',
  styleUrls: ['./udemy-course.component.css']
})
export class UdemyCourseComponent implements OnInit {
  category = [
    { id: 1, name: 'Developent'},
    { id: 2, name: 'Art'},
    { id: 3, name: 'Languages'}
  ];
  loggin(firstName){
    console.log(firstName);
  }
  submit(f){
    console.log(f);
    
  }
  constructor() { }

  ngOnInit() {
  }

}
