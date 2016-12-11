import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

//Root Component
@Component({
    selector: 'app',
    template: `<h1>Agriculcharal Technology</h1>
	<a routerLink='/agri-tech/drones'>Drones</a>
	<a routerLink='/agri-tech/sensors'>Crop sensors</a>
	<a routerLink='/agri-tech/Automation'>Automation</a>
	<a routerLink='/agri-tech/Engineering'>Engineering</a>
	<router-outlet></router-outlet>`
})
export class AgriTech {
    name: string;
    constructor(route: ActivatedRoute) {
		this.productID = route.snapshot.params['id'];
	}
    //Lifecycle init method
    ngOnInit() { 
      console.log('AgriTech initialisation');
    } 
}