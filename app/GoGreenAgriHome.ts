import {Component} from '@angular/core';

//Root Component
@Component({
    selector: 'GoGreenAgri',
    template: `<h1>Go Green Agri Here to help you to do better farming </h1>`
})
export class GoGreenAgriHome {
    name: string;
    constructor() {
        //this.name = 'Angular 2';
    }
    //Lifecycle init method
    ngOnInit() { 
      console.log('GoGreenAgriHome initialisation');
    } 
}