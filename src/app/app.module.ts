import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokesComponent } from './jokes/jokes.component';
import { JokeschildComponent } from './jokeschild/jokeschild.component';
import { InfopersonalComponent } from './infopersonal/infopersonal.component';
import { InfopersonalchildComponent } from './infopersonalchild/infopersonalchild.component';

import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent,
    JokeschildComponent,
    InfopersonalComponent,
    InfopersonalchildComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
