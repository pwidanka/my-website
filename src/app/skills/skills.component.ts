import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit() {
    document.body.style.backgroundImage =  'url("assets/background.png")';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize=  'cover';
  }

  onSwiperight(event){
    this.router.navigate(['/home']);    
  }

}
