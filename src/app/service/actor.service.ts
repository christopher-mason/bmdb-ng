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

  // get by id
  getByID(id): Observable<Actor> {
    return this.http.get(URL+'/'+id) as Observable<Actor>;
  }

  // create actor
  create(actor: Actor): Observable<Actor> {
    return this.http.post(URL+'/', actor) as Observable<Actor>;
  }

  //update actor
  update(actor: Actor): Observable<Actor> {
    return this.http.put(URL+'/', actor) as Observable<Actor>;
  }

  // delete actor
  delete(id): Observable<Actor> {
    return this.http.delete(URL+'/'+ id) as Observable<Actor>;
  }

}
