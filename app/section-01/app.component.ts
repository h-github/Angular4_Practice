import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app', // to use me, put <my-app> in index.html
    templateUrl: './app/section-01/app.component.html'
})
export class AppComponent implements OnInit  {
    name = 'Alex Smith';
    image = 'favicon.ico'
    color = 'red';
    street = '123 Here Dr.';
    city = 'Coquitlam';
    region = '';
    hideAddress: boolean = false;
    height = '200px';

    ngOnInit() {
        this.regionChange("East");
    }
    clicked() {
        this.color = this.color === 'red' ? 'blue' : 'red';
    }

    changeColor(color: string) {
        this.color = color;
    }

    toggleAddress() {
        this.hideAddress = !this.hideAddress;
    }

    regionChange(region: string) {
        this.region = region;
    }
}
