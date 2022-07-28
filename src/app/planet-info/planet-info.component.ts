import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable, tap } from 'rxjs';
import { IPeople } from 'src/app/models/people';
import { IPlanet } from 'src/app/models/planet';
import { PlanetsService } from 'src/app/services/planets.service';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-planet-info',
  templateUrl: './planet-info.component.html',
})
export class PlanetInfoComponent implements OnInit {
  gender = '';
  planetinf: IPlanet;
  @Input() residents: IPeople[] = [];
  // residents$: Observable<IPeople[]>;
  id: number;
  private routeSubscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private planetsService: PlanetsService,
    private peopleService: PeopleService
  ) {
    this.routeSubscription = route.url.subscribe(
      (params) => (this.id = Number(params[1]))
    );
  }

  ngOnInit(): void {
    this.planetsService.getOne(this.id).subscribe((planet) => {
      console.log(this.id);
      console.log(planet);
      this.planetinf = planet;
      for (let i = 0; i <= this.planetinf.residents.length - 1; i++) {
        this.peopleService
          .getAll(this.planetinf.residents[i])
          .subscribe((resident) => {
            this.residents.push(resident);
            console.log(this.residents);
          });
      }
    });
  }
}
