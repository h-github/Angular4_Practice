import { Component, Input, OnInit } from '@angular/core';


import { Address } from './model';
import { DataService } from './data.service';

@Component({
    moduleId: module.id,
    selector: 'address-comp',
    templateUrl: 'address.component.html'
})

export class AddressComponent implements OnInit {
    constructor(
        private dataService: DataService
    ) { }

    regions = ['East', 'South', 'North', 'West', 'Midwest'];
    // states = ['California', 'Quebec', 'Jalisco', 'Illinois'];
    states: string[];

    @Input() address: Address;

    ngOnInit() {
        this.dataService.getStates().subscribe(states => {
            this.states = states;
        });
    }
}