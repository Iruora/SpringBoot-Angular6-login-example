import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import {User} from '../model/model.user';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
  private router: Router;
  constructor(public http: HttpClient) { }
  public errorMessage = '';
  authenticated = false;
  authenticate(credentials, callback) {

    const headers = new HttpHeaders(credentials ? {
        authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get(AppComponent.API_URL + '/account/login', {headers: headers})
    .subscribe((response) => {
        let data: any ;
        data = response;
        const u = data.principal;
        if (response['fullName']) {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
        return callback && callback(data);
    });

}
  public logIn(user: User) {
    console.log(user);
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    // creating base64 encoded String from user name and password
    const base64Credential: string = btoa( user.username + ':' + user.password);
    headers.set( 'Authorization', 'Basic ' + base64Credential);
    console.log(headers);
    // const options = new RequestOptions();

    return this.http.get(AppComponent.API_URL + '/account/login', {headers: headers});
  }

  logOut() {
    // remove user from local storage to log user out
    // return this.http.post(AppComponent.API_URL + 'logout', {})
    // .subscribe((response) => {
      // console.log('Response_logout : ' + response);
      // let u = localStorage.getItem('currentUser');
      // console.log(u);
      // localStorage.removeItem('currentUser');
      // this.router.navigate(['/logout']);
    // },
    // error => {

    // });

  }
}
