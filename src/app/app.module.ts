import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetComponent } from './components/planet/planet.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsComponent } from './pages/planets/planets.component';
import { PlanetInfoComponent } from './planet-info/planet-info.component';
import { PeopleComponent } from './pages/people/people.component';
import { FormsModule } from '@angular/forms';
import { FilterPersonPipe } from './pipes/filter-person.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    PlanetInfoComponent,
    NotFoundComponent,
    PlanetsComponent,
    PlanetInfoComponent,
    PeopleComponent,
    FilterPersonPipe,
  ],

  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
