import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, RouteReuseStrategy, withComponentInputBinding} from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {CustomReuseStrategy} from './CustomReuseStrategy';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy,
    },
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ]
};
