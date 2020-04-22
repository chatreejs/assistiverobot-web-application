import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {throwError as observableThrowError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class KobukiService {
  constructor(private http: HttpClient) {

  }

  static errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error');
  }

  getJob(): any {
    return this.http.get<any>(environment.job).pipe(
      map((data: any) => data.result),
      catchError(KobukiService.errorHandler));
  }
}
