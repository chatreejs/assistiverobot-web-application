import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {throwError as observableThrowError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class RobotService {
  constructor(private http: HttpClient) {

  }

  static errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error');
  }

  postJob(form: any, onSuccess, onError) {
    console.log(form);
    this.http.post<any>(environment.job, form).subscribe((res) => {
      onSuccess();
    }, (err) => {
      onError();
    });
  }
}
