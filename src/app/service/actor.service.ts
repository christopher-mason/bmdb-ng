import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actor } from '../model/actor.class';

const URL = 'http://localhost:8080/actors';
@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Actor[]> {
    return this.http.get(URL+'/') as Observable<Actor[]>;
  }
}
