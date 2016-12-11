import {Component} from '@angular/core';

//Root Component
@Component({
    selector: 'app',
    template: `<h1>Welcome to GoGreen-Agriculture</h1>
	<a routerLink='/home'>Home</a>
	<a routerLink='/farms'>Agriculture Farms</a>
	<a routerLink='/agri-tech'>Agriculture Technology</a>
	<router-outlet></router-outlet>`
})
export class AppComponent {
    name: string;
    constructor() {
        //this.name = 'Angular 2';
    }
    //Lifecycle init method
    ngOnInit() { 
      console.log('AppComponent initialisation');
    } 
}