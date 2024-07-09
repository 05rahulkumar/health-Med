import { Injectable } from '@angular/core';
import {Router} from '@angular/router'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService,private router:Router) {
    console.log(this.authService.getToken());
    
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request=request.clone({
      setHeaders:{
        Authorization:`Bearer ${this.authService.getToken()}`
      }
    })
    return next.handle(request);
  }

}
