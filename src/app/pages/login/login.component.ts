import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  

  ngOnInit(): void {

    // $('.test').click(function(){
    //   $('.test2').hide();
    // })
   
 $('.img-btn').click(function(){
  $('.cont').toggleClass('s-signup');
 })


  }
  buttonClick(){
    this.router.navigateByUrl('/admin');
  }
 
}
