import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockData } from './in-memory-data'

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';



@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    HomeComponent,
    NoContentComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    InMemoryWebApiModule.forRoot(MockData),
    NgbModule.forRoot()
  ],
  providers: [ 

  ]
})
export class AppModule {}

