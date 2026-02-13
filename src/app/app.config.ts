import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideHttpClient,
  withInterceptorsFromDi,
  HTTP_INTERCEPTORS,
  withInterceptors,
} from '@angular/common/http';

import { routes } from './app.routes';
import { loaderInterceptor } from './interceptors/loader-interceptor';
import { errorInterceptor } from './interceptors/error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    // Provide HTTP client with interceptors
    provideHttpClient(withInterceptors([loaderInterceptor, errorInterceptor])),
  ],
};
