import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlanetInfoComponent } from './planet-info/planet-info.component';

import { PlanetComponent } from './components/planet/planet.component';
import { PlanetsComponent } from './pages/planets/planets.component';

const appRoutes: Routes = [
  { path: '', component: PlanetsComponent },
  { path: 'planetsInfo/:', component: PlanetInfoComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
