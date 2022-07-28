import { Component, Input, OnInit } from '@angular/core';
import { IPeople } from 'src/app/models/people';
import { IPlanet, Resp } from 'src/app/models/planet';
import { PeopleService } from 'src/app/services/people.service';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
})
export class PeopleComponent {}
