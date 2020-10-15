import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticationInceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Get the auth token from the service.
        const authenToken = this.authenticationService.getAuthorizationToken()
        if (authenToken !== '') {
            // Clone the request and replace the original headers with
            // cloned headers, updated with the authorization.
            const authRequest = request.clone({ setHeaders: { Authorization: authenToken } });
            // send cloned request with header to the next handler.
            return next.handle(authRequest);
        } else {
            return next.handle(request);
        }
    }

}