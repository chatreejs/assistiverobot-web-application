import { Injectable } from '@angular/core';
import { environment } from 'projects/kobuki/src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultResponse } from '../models/ResultResponse';
import { Job } from '../models/Job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private endPoint: string = environment.baseUrl + '/api/v1/jobs'

  constructor(
    private http: HttpClient
  ) { }

  public getJobs(): Observable<ResultResponse<Job>> {
    return this.http.get<ResultResponse<Job>>(this.endPoint)
  }

  public getJobById(id: number) {

  }

  public createJob(job) {

  }

  public updateJob(job) {

  }

}
