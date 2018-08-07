import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit() {
    document.body.style.backgroundImage =  'url("assets/background.png")';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize=  'cover';
  }

  onSwipeleft(event){
    this.router.navigate(['/home']); 
  }
}
