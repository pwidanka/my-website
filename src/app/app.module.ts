import { AppRouting } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadersCssModule } from 'angular2-loaders-css';
import { IntroComponent } from './intro/intro.component';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { direction: Hammer.DIRECTION_ALL }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ContactComponent,
    PortfolioComponent,
    SkillsComponent,
    HomeComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    BrowserAnimationsModule,
    LoadersCssModule
  ],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
