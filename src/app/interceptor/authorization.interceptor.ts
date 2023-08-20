import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../service/Authentication/token.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.tokenService.getToken();
    if (token !== null) {
      let requestClone = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token),
      });
      this.tokenService.setIslogged(true);
      return next.handle(requestClone);
    }
    this.tokenService.setIslogged(false);
    return next.handle(request);
  }
}

export const AuthorizationInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthorizationInterceptor,
  multi: true,
};
