import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

//Root Component
@Component({
    selector: 'app',
    template: `<h1>Agriculcharal Technology Types {{techType}}</h1>`
})
export class AgriTechTypes {
    name: string;
    constructor(private route: ActivatedRoute) {
		route.params.subscribe(
			_ => this.techType = _.id;
		);
	}
    //Lifecycle init method
    ngOnInit() { 
      console.log('AgriTech initialisation');
    } 
}