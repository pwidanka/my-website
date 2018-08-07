import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  hidden: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.hidden = false;
    }, 500);
    setTimeout(() => { 
      this.router.navigate(['/home']); 
    }, 3000);
  }

  // showHomePage() {  
  //     this.router.navigate(['/home']); 
  // }

}
