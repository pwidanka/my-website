import { Router } from '@angular/router';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    document.body.style.backgroundImage = 'url("assets/background.png")';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
  }

  onSwipedown(event){
    this.router.navigate(['/home']);
  }

}
