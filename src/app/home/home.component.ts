import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message = 'Cześć, tu Przemek. Front-end Developer';

  constructor( private router: Router,) { }

  ngOnInit() {
    let typed = new Typed("#typed", {
      strings: [this.message],
      typeSpeed: 50,
      fadeOut: true,
      showCursor: false,
      cursorChar: "|",
      loop: true
  });
  document.body.style.backgroundImage =  'url("assets/tlo.jpg")';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize=  'cover';
  }



}
