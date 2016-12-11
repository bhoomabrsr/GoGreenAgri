import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/AppComp.ts';
import { GoGreenAgriHome } from './app/GoGreenAgriHome.ts';
import { AgriFarms } from './app/AgriFarms.ts';
import { AgriTech } from './app/AgriTech.ts';
import { AgriTechTypes } from './app/AgriTechTypes.ts';

const agriRoutes: Routes = [
{path: '', pathMatch: 'full', redirectTo: '/home'},
    { path: 'home', component: GoGreenAgriHome }
    { path: 'farms', component: AgriFarms },
	  { path: 'agri-tech', component: AgriTech 
		   children: [
			    { path: ':id', component: AgriTechTypes}
		  ]
	  }
  ];

//Root Module: NgModule to bootstrap your application
@NgModule({
    imports:      [ BrowserModule,  RouterModule.forRoot(agriRoutes) ], /*Allows your app’s module to use code from another module.*/
    declarations: [ AppComponent, AgriFarms, AgriTech, GoGreenAgriHome, AgriTechTypes ],  /*Declares all components used in the  module.*/
    bootstrap:    [ AppComponent ]   /*Tells Angular 2 to bootstrap the 'Appcomponent' as the root of the application.*/
})
export class AppModule { }


//Bootstrap Angular 2 with the 'AppModule' NgModule.
platformBrowserDynamic().bootstrapModule(AppModule); 