import { Observable, of, tap, catchError, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseurl: string = environments.baseurl;
  private user?: User;

  constructor(private http: HttpClient) { }

  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user)
  }

  checkAutentication(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      return of(false);
    }
    const token = localStorage.getItem('token');
    return this.http.get<User>(`${this.baseurl}/users/1`)
      .pipe(
        tap(user => this.user = user),
        map(user => !!user),
        catchError(error => of(false))
      )
  }

  login(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.baseurl}/users/1`)
      .pipe(
        tap(user => this.user = user),
        tap(user => localStorage.setItem('token', user.id.toString()))
      )
  }
  logout() {
    this.user = undefined;
    localStorage.clear();
  }

}