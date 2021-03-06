import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ResultResponse } from '../models/ResultResponse';
import { Job } from '../models/Job';
import { JobRequest } from '../models/requests/JobRequest';
import { take, catchError } from 'rxjs/operators';
import { WEB_SERVICE_CONFIG } from '../provider-name-token';
import { WebServiceConfig } from '../web-service-config';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private endPoint: string = this.webServiceConfig.webServiceUrl + '/api/v1/jobs'

  constructor(
    private http: HttpClient,
    @Inject(WEB_SERVICE_CONFIG) private webServiceConfig: WebServiceConfig
  ) { }

  handleError(error: HttpErrorResponse) {
    return throwError(error)
  }

  public getJobs(status?: string, limit?: number): Observable<ResultResponse<Job[]>> {
    let httpParams = new HttpParams()
    if (status) {
      httpParams = httpParams.append("status", status)
    }
    if (limit) {
      httpParams = httpParams.append("limit", limit.toString())
    }
    return this.http.get<ResultResponse<Job[]>>(this.endPoint, { params: httpParams })
      .pipe(take(1), catchError(this.handleError))
  }

  public getJobById(id: number): Observable<ResultResponse<Job>> {
    return this.http.get<ResultResponse<Job>>(`${this.endPoint}/${id}`)
      .pipe(take(1), catchError(this.handleError))
  }

  public createJob(JobRequest: JobRequest): Observable<ResultResponse<any>> {
    return this.http.post<ResultResponse<any>>(this.endPoint, JobRequest)
      .pipe(take(1), catchError(this.handleError))
  }

  public updateJob(id: number, status: string): Observable<ResultResponse<any>> {
    return this.http.patch<ResultResponse<any>>(`${this.endPoint}/${id}`, { status: status })
      .pipe(take(1), catchError(this.handleError))
  }

}
