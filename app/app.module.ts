import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppModule as C01Module } from './section-01/app.module';
import { AppModule as C02Module } from './section-02/app.module';
import { AppModule as C03Module } from './section-03/app.module';


import { AppComponent, SectionViewDirective } from './app.component';

// in-mem-web-api and its test-data service
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]), // <-- for future routing features

    C01Module,
    C02Module,
    C03Module,

  ],

  declarations: [AppComponent, SectionViewDirective],
  // entryComponents: would list the dynamically loaded components
  // for AOT/dead-code-removal but not needed for this JIT-only harness
  bootstrap: [AppComponent]
})
export class AppModule { }
