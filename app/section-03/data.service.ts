import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

import { createTestCustomers } from './test-data'
import { LoggerService } from './logger.service'
import { Customer } from './model'

@Injectable()
export class DataService {

    private customerUrl = 'api/customers';
    private statesUrl = 'api/states';
    constructor(
        private loggerService: LoggerService,
        private http: Http) { }


    getCustomrsP(): Promise<Customer[]> {
        this.loggerService.log(`Getting customers as a promise via Http ...`);

        return this.http.get(this.customerUrl)
            .toPromise()
            .then(response => {
                const custs = response.json().data as Customer[];
                this.loggerService.log(`Got ${custs.length} customers`); return custs;
            },
            error => {
                this.loggerService, console.log(`Error occurred: ${error}`);
                return Promise.reject('Something bad happened in getting customers please check the console');
            });
    }

    getCustomers(): Observable<Customer[]> {
        this.loggerService.log(`Getting customers as a observable via Http ...`);
        return this.http.get(this.customerUrl)
            .map(response => response.json().data as Customer[])
            .do((custs) => {
                this.loggerService.log(`Got ${custs.length} customers`);
            })
            .catch((error: any) => {
                this.loggerService, console.log(`Error occurred: ${error}`);
                return Observable.throw('Something bad happened in getting customers please check the console');
            });
    }

    getStates(): Observable<string[]> {
        this.loggerService.log(`Getting states as a observable via Http ...`);
        return this.http.get(this.statesUrl)
            .map(response => response.json().data as string[])
            .do((sts) => {
                this.loggerService.log(`Got ${sts.length} states`);
            }).catch((error: any) => {
                this.loggerService, console.log(`Error occurred: ${error}`);
                return Observable.throw('Something bad happened in getting states please check the console');
            });


    }
}