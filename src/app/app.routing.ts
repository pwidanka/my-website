import { IntroComponent } from './intro/intro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutMeComponent } from './about-me/about-me.component';


const appRoutes: Routes = [

    { path: 'intro', component: IntroComponent, data:  {depth: '0'} },
    { path: 'home', component: HomeComponent, data:  {depth: '1'} },
    { path: 'portfolio', component: PortfolioComponent ,data:  {depth: '2'} },
    { path: 'contact', component: ContactComponent, data:  {depth: '3'} },
    { path: 'skills', component: SkillsComponent, data:  {depth: '4'} },
    { path: 'about-me', component: AboutMeComponent, data:  {depth: '5'} },

    { path: '**', redirectTo: 'intro' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRouting {

}