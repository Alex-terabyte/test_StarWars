import { Component, Input } from '@angular/core';
import { IPlanet } from './../../models/planet';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
})
export class PlanetComponent {
  @Input() planets: IPlanet;
}
