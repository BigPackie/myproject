import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MainModule } from './main.module';
import { UserData } from './user-data.model';

@Injectable()
export class DataStoreService {
  private _userData = new BehaviorSubject<UserData>(null);
  userData$ = this._userData.asObservable();

  constructor() {}

  setUserData(userData: UserData) {
    this._userData.next(userData);
  }
}
