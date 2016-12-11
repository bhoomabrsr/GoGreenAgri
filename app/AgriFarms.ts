import {Component} from '@angular/core';

//Root Component
@Component({
    selector: 'app',
    template: `<h1>Agriculcharal Farms</h1>`
})
export class AgriFarms {
    name: string;
    constructor() {
        //this.name = 'Angular 2';
    }
    //Lifecycle init method
    ngOnInit() { 
      console.log('AgriFarms initialisation');
    } 
}