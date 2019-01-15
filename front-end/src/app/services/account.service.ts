import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from '../model/model.user';
import {Http} from '@angular/http';
import {AppComponent} from '../app.component';

@Injectable()
export class AccountService {
  constructor(public http: HttpClient) { }

  createAccount(user: User) {
    return this.http.post(AppComponent.API_URL + '/account/register', user);
  }
}
