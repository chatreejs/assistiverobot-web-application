import { Injectable } from '@angular/core';
import { environment } from 'projects/website/src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ResultResponse } from '../models/ResultResponse';
import { Goal } from '../models/Goal';
import { take, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  private endPoint: string = environment.baseUrl + '/api/v1/goals'

  constructor(
    private http: HttpClient
  ) { }

  handleError(error: HttpErrorResponse) {
    return throwError(error)
  }

  public getGoals(): Observable<ResultResponse<Goal>> {
    return this.http.get<ResultResponse<Goal>>(this.endPoint)
      .pipe(take(1), catchError(this.handleError))
  }

  public getGoalById(id: number) {

  }

  public createGoals(location: Location) {

  }

  public updateGoals(location: Location) {

  }
}
