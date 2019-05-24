import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router: Router) { }
  onSubmit(value: any) {
    console.log(value);  // { first: '', last: '' }
     // false
    // localStorage.setItem('email', value.email_id);
    // localStorage.setItem('password', value.passwd);
    let emails=localStorage.getItem('email');
    let pwd=localStorage.getItem('password');
    let name=localStorage.getItem('name');

    console.log(emails, pwd);
    if(emails == value.email_id && pwd==value.passwd){
      alert('welcome    ' + name);
      this.router.navigate(['/dashboard']);
    } 
    else{
      alert('sahi daalo');
    }
  }
  ngOnInit() {
  }

}
