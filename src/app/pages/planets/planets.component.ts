import { Component, OnInit } from '@angular/core';
import { IPlanet, Resp } from 'src/app/models/planet';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
})
export class PlanetsComponent implements OnInit {
  title = 'test_project_tarasenko';

  planets: IPlanet[] = [];
  data: Resp;

  constructor(private planetsService: PlanetsService) {}

  ngOnInit(): void {
    this.planetsService.getAll().subscribe((planets) => {
      this.data = planets;
      this.planets = this.data.results;
      console.log('Planets', this.planets);
      console.log('Resp', this.data);
    });
  }
}
