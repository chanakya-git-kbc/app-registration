import { Routes } from '@angular/router';
import { AppRegistration } from './feature/app-registration/app-registration';
import { Home } from './feature/home/home';
import { About } from './feature/about/about';
import { Login } from './feature/login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'registration', component: AppRegistration },
  { path: 'login', component: Login }
];
