import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WrapperComponent, WrapperConfig} from './shared/wrapper/wrapper.component';
import {startWith} from './starts-with';

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
    component: WrapperComponent,
    data: {
      config: {
        remoteName: 'mfe1',
        exposedModule: './web-comp',
        elementName: 'mfe1-root'
      } as WrapperConfig
    }
  },
  {
    matcher: startWith('mfe2'),
    component: WrapperComponent,
    data: {
      config: {
        remoteName: 'mfe2',
        exposedModule: './web-comp',
        elementName: 'mfe2-root'
      } as WrapperConfig
    }
  },
  {
    path: 'mfe3',
    component: WrapperComponent,
    data: {
      config: {
        remoteName: 'mfe3',
        exposedModule: './web-comp',
        elementName: 'mfe3-root'
      } as WrapperConfig,
      reuse: true
    }
  },
];
