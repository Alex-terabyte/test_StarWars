import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPeople } from '../models/people';

@Injectable({ providedIn: 'root' })
export class PeopleService {
  constructor(private http: HttpClient) {}

  getAll(url: string): Observable<IPeople> {
    console.log(url);
    return this.http.get<IPeople>(`${url}`);
  }
}
