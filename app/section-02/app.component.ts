import { Component } from '@angular/core';

@Component({
    selector: 'my-app', // to use me, put <my-app> in index.html
    templateUrl: './app/section-02/app.component.html'
})
export class AppComponent{
    name = 'Alex Smith';
    street = '123 Here Dr.';
    city = 'Coquitlam';
    region = '';
    hideAddress: boolean = false;
}
