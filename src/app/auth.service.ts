import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const IS_LOGGED_IN_KEY = 'isLoggedIn';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this._isLoggedIn.asObservable();

  constructor() {
    this.autoLogin();
  }

  login(): Observable<boolean> {
    this.saveAuthData();
    this._isLoggedIn.next(true);
    return this.isLoggedIn$;
  }

  autoLogin() {
    const loggedIn = this.loadAuthData();

    if (loggedIn === null) {
      return;
    }

    this._isLoggedIn.next(true);
  }

  saveAuthData() {
    localStorage.setItem(IS_LOGGED_IN_KEY, '');
  }

  loadAuthData() {
    return localStorage.getItem(IS_LOGGED_IN_KEY);
  }
}
