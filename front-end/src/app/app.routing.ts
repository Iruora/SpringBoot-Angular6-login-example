import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ProfileComponent} from './components/profile/profile.component';
import {UrlPermission} from './urlPermission/url.permissions';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'profile', component: ProfileComponent , canActivate: [UrlPermission] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'not-found', component: NotFoundComponent },
  // otherwise redirect to profile
  { path: '**', redirectTo: '/not-found' }
];

export const routing = RouterModule.forRoot(appRoutes);
