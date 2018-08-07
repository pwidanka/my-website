import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  message = 'Cześć, tu Przemek. Front-end Developer';
  ukryj: boolean = false;
  // loading = false;

  constructor( private router: Router) { }

  ngOnInit() {
    this.ukryj = true;
      // this.loading = true;
      let typed = new Typed("#typed", {
        strings: [this.message],
        typeSpeed: 50,
        fadeOut: true,
        showCursor: false,
        loop: true,
        cursorChar: "|",
    });
    // document.body.style.backgroundImage =  'url("assets/tlo.jpg")';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize=  'cover';
    
  }

  onSwiperight(event){
    this.router.navigate(['/portfolio']);
  }

  onSwipeleft(event){
    this.router.navigate(['/skills']); 
  }

  onSwipedown(event){
    this.router.navigate(['/about-me']);
  }

  onSwipeup(event){
    this.router.navigate(['/contact']);    
  }

}
