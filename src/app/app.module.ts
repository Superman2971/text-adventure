import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdventureComponent } from './adventure/adventure.component';
import { PlayComponent } from './play/play.component';
import { CreateComponent } from './create/create.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
// Services
import { Broadcaster } from './broadcaster.service';
import { NavbarService } from './navbar/navbar.service';
import { GameService } from './create/game.service';

const appRoutes: Routes = [{
    path: '',
    component: AdventureComponent
  }, {
    path: 'play',
    component: PlayComponent
  }, {
    path: 'create',
    component: CreateComponent
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
    PlayComponent,
    CreateComponent,
    NavbarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    Broadcaster,
    NavbarService,
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
