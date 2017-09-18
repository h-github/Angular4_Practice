import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app', // to use me, put <my-app> in index.html
    template: `
    <h1>{{title}}</h1>
    <customer-list></customer-list>`
})
export class AppComponent {
    title= 'Customer Management';
    


}
