import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/hero';
import { Observable, catchError, map, of } from 'rxjs';
import { environments } from 'src/environments/environments';

@Injectable({ providedIn: 'root' })

export class HeroesService {

  private baseurl: string = environments.baseurl;

  constructor(private httpClient: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${this.baseurl}/heroes`);
  }
  getHeroById(id: string): Observable<Hero | undefined> {
    return this.httpClient.get<Hero>(`${this.baseurl}/heroes/${id}`)
      .pipe(
        catchError(error => of(undefined))
      );
  }
  getSuggestions(query: string): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${this.baseurl}/heroes?q=${query}&_limit=6`);
  }
  addheroe(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(`${this.baseurl}/heroes`, hero);
  }
  updateheroe(hero: Hero): Observable<Hero> {
    if (!hero.id) throw Error('Hero id is required');
    return this.httpClient.patch<Hero>(`${this.baseurl}/heroes/${hero.id}`, hero);
  }
  deleteheroe(id: string): Observable<Boolean> {
    return this.httpClient.delete<Hero>(`${this.baseurl}/heroes/${id}`)
      .pipe(
        map(resp => true),
        catchError(error => of(false))
      );
  }

}
