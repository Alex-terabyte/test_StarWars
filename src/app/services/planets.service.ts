import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlanet, Resp } from '../models/planet';

@Injectable({ providedIn: 'root' })
export class PlanetsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Resp> {
    return this.http.get<Resp>('https://swapi.dev/api/planets/');
  }

  getOne(planetid: number): Observable<IPlanet> {
    return this.http.get<IPlanet>(`https://swapi.dev/api/planets/${planetid}`);
  }
}
