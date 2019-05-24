import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit{

  check = false;
  dName: any;

  constructor() {
    console.log('name', localStorage.getItem('email'));
    this.dName = localStorage.getItem('name');
  }

  ngOnInit() {
    this.check = true;
    console.log('hello', this.dName);
  }
}