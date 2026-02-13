import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { inject } from '@angular/core';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderService = inject(LoaderService);

  // Increment request count and show loader
  loaderService.show();

  return next(req).pipe(
    finalize(() => {
      // Decrement request count and hide loader when request finishes
      loaderService.hide();
    }),
  );
};
