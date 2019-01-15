import { Component, OnInit } from '@angular/core';
import { User } from '../../model/model.user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  user: User = new User();
  errorMessage: string;
  constructor(private authService: AuthService, private router: Router) { }



  ngOnInit() {
  }
  login() {
    this.authService.authenticate(this.user, (e) => {
      this.router.navigateByUrl('/profile');
      console.log(e);
      let resp: any;
      resp = e.principal;
      // this.user.fullName = 'ndh';
      if (resp) {
        // store user details  in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(resp));
      }
    });
  }
}
