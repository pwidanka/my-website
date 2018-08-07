import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { animate, group, query, style, transition, trigger } from '@angular/animations';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition('1 => 4, 2 => 1', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 })),
        // animate the leave page away
        group([
          query(':leave', [
            animate('0.7s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' })),
          ]),
          // and now reveal the enter
          query(':enter', animate('0.7s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
        ]),
      ]),
      transition('1 => 5, 3 => 1', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateY(-100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 })),
        // animate the leave page away
        group([
          query(':leave', [
            animate('0.7s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(100%)' })),
          ]),
          // and now reveal the enter
          query(':enter', animate('0.7s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(0)' }))),
        ]),
      ]),
      transition('5 => 1, 1 => 3', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateY(100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 })),
        // animate the leave page away
        group([
          query(':leave', [
            animate('0.7s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(-100%)' })),
          ]),
          // and now reveal the enter
          query(':enter', animate('0.7s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(0)' }))),
        ]),
      ]),
      transition('4 => 1, 1 => 2', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(-100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 })),
        // animate the leave page away
        group([
          query(':leave', [
            animate('0.7s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)' })),
          ]),
          // and now reveal the enter
          query(':enter', animate('0.7s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
        ]),
      ]),
    ]),
    trigger('routerTransition', [
      transition('0 => 1', [    
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 1 })),
        group([ 
          query(':enter', [
            style({ opacity:0 }),
            animate('1000ms ease-in-out', style({ opacity:1 }))
          ]),
          query(':leave', [
            style({ opacity:1 }),
            animate('1000ms ease-in-out', style({ opacity:0 }))]),
        ])
      ])
    ])
  ]
})
export class AppComponent {
  swipeDirection: string = '-';
  title = 'app';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate([''])
  }

  getDepth(outlet: RouterOutlet) { 
    return outlet.activatedRouteData['depth'];
  }

  getTransition(outlet: RouterOutlet){
    return outlet.activatedRouteData['depth'];
  }

}
