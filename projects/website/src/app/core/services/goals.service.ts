import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ResultResponse } from '../models/ResultResponse';
import { Goal } from '../models/Goal';
import { take, catchError } from 'rxjs/operators';
import { WEB_SERVICE_CONFIG } from '../provider-name-token';
import { WebServiceConfig } from '../web-service-config';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  private endPoint: string = this.webServiceConfig.webServiceUrl + '/api/v1/goals'

  constructor(
    private http: HttpClient,
    @Inject(WEB_SERVICE_CONFIG) private webServiceConfig: WebServiceConfig
  ) { }

  handleError(error: HttpErrorResponse) {
    return throwError(error)
  }

  public getGoals(): Observable<ResultResponse<Goal>> {
    return this.http.get<ResultResponse<Goal>>(this.endPoint)
      .pipe(take(1), catchError(this.handleError))
  }

  // TODO: Implement
  // public getGoalById(id: number) {

  // }

  public updateGoals(id: number, status: string): Observable<ResultResponse<any>> {
    return this.http.patch<ResultResponse<any>>(`${this.endPoint}/${id}`, { status: status })
      .pipe(take(1), catchError(this.handleError))
  }
}
