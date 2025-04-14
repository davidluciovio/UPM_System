import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
// import Aura from '@primeng/themes/aura';

import { routes } from './app.routes';

import MyPreset from './mypreset';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './auth/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
        ripple: true,
        theme: {
            preset: MyPreset,
            options: {
              prefix: 'p',
              darkModeSelector: '.dark-mode',
              cssLayer: false
          }
        }
    }),
    provideHttpClient(withInterceptors([tokenInterceptor]))
  ]
};
