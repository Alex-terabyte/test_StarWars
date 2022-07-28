import { Component, Input, OnInit } from '@angular/core';
import { IPeople } from 'src/app/models/people';
import { IPlanet, Resp } from 'src/app/models/planet';
import { PeopleService } from 'src/app/services/people.service';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
})
export class PeopleComponent {
  // resident: IPeople[];
  // planetinf: IPlanet;
  // residents: IPeople[];
  // constructor(private peopleService: PeopleService) {}
  // ngOnInit(): void {
  //   for (let i = 0; i <= this.planetinf.residents.length - 1; i++) {
  //     this.peopleService
  //       .getAll(this.planetinf.residents[i])
  //       .subscribe((resident) => {
  //         // this.residents.push(...resident);
  //         this.resident = resident;
  //         this.residents.push(...this.resident);
  //         console.log(...this.resident);
  //         console.log(...this.residents);
  //       });
  //   }
  // }
}
