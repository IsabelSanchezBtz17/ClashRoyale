import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const TOKEN: string = this.authService.token;

    console.log('Token: ', TOKEN);
    const HEADER_REQUEST: HttpRequest<any> = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${TOKEN}`),
      params: (request.params ? request.params : new HttpParams()).set('api_key', '<<api_key>>')
    })
    console.log();
    return next.handle(HEADER_REQUEST);
    
  }
}
