import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {loadRemoteModule} from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'mfe1',
    loadComponent: () => loadRemoteModule('mfe1', './Component')
  },
  {
    path: 'mfe2',
    loadComponent: () => loadRemoteModule('mfe2', './Component')
  }
];
