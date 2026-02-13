import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: any) => {
      if (error.status) {
        // Handle specific HTTP status codes
        switch (error.status) {
          case 400:
            alert('Bad Request (400)');
            break;
          case 401:
            alert('Unauthorized (401) - Please login again');
            break;
          case 403:
            alert('Forbidden (403) - Access denied');
            break;
          case 404:
            alert('Not Found (404)');
            break;
          case 500:
            alert('Server Error (500) - Try later');
            break;
          default:
            alert(`HTTP Error ${error.status}`);
        }
      } else {
        // Handle network errors
        alert('Network Error or server not reachable');
      }

      console.error('HTTP Error:', error);
      return throwError(() => error);
    }),
  );
};
