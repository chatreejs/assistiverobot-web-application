import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { config } from "../../../environments/config";


@Injectable({
  providedIn: 'root'
})

export class KobukiService {
  goal_sender = null;
  goal_recipent = null;

  constructor(private http: HttpClient) {

  }

  static errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error');
  }

  getJob(): any {
    return this.http.get<any>(config.job).pipe(
      map((data: any) => data.result),
      catchError(KobukiService.errorHandler));
  }

  updateGoalStatus(isSender: boolean): void {
    let goalId: number;
    isSender ? goalId = this.goal_sender : goalId = this.goal_recipent;
    console.log(goalId);
    this.http.patch<any>(config.goal + "/" + goalId, {
      status: "success"
    }).subscribe(
      res => {
        console.log('received ok response from patch request');
      },
      error => {
        console.error('There was an error during the request');
        console.log(error);
      });
  }
}
