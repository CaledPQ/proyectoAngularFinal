import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesComponent } from './jokes/jokes.component';
import { InfopersonalComponent } from './infopersonal/infopersonal.component';

const routes: Routes = [
  {path:"jokes" ,component:JokesComponent},
  {path:"infopersonal", component:InfopersonalComponent},
  {path:"",component:JokesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
