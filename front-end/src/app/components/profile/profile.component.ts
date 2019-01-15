import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {User} from '../../model/model.user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  currentUser: User;
  constructor(public authService: AuthService, public router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));


  }

  ngOnInit() {
    console.log('currentUser', this.currentUser);
  }

// login out from the app
  logOut() {
    // this.authService.logOut();
    // localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/logout']);
  }
}
