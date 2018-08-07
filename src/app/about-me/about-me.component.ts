import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    document.body.style.backgroundImage =  'url("assets/background.png")';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize=  'cover';
  }

  onSwipeup(event){
    this.router.navigate(['/home']);    
  }

}
