import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdventureComponent } from './adventure/adventure.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [{
    path: '',
    component: AdventureComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: '**', // a catch all for page not found, maybe make a PageNotFoundComponent
    component: AdventureComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    AdventureComponent,
    NavbarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
