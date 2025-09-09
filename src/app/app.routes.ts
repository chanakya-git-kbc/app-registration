import { Routes } from '@angular/router';
import { AppRegistration } from './app-registration/app-registration';
import { Home } from './home/home';
import { About } from './about/about';
import { Login } from './login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'registration', component: AppRegistration },
  { path: 'login', component: Login }
];
