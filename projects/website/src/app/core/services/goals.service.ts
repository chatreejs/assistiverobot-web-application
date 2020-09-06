import { Injectable } from '@angular/core';
import { environment } from 'projects/kobuki/src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultResponse } from '../models/ResultResponse';
import { Goal } from '../models/Goal';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  private endPoint: string = environment.baseUrl + '/api/v1/goals'

  constructor(
    private http: HttpClient
  ) { }

  public getGoals(): Observable<ResultResponse<Goal>> {
    return this.http.get<ResultResponse<Goal>>(this.endPoint)
  }

  public getGoalById(id: number) {

  }

  public createGoals(location: Location) {

  }

  public updateGoals(location: Location) {

  }
}
