import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router) { 

  }

  onSubmit(value: any) {
    console.log(value);  // { first: '', last: '' }
    localStorage.setItem('name', value.name);
    localStorage.setItem('email', value.email_id);
    localStorage.setItem('password', value.passwd);
    this.router.navigate(['/logIn']);
  }
  
  ngOnInit() {
  
  }
}
