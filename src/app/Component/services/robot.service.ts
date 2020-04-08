import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class RobotService {
  constructor(private http: HttpClient) {

  }

  static errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error');
  }

  getPosition() {

  }

  postJob() {

  }

  patchJob() {

  }
}
