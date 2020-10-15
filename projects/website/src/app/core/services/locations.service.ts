import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ResultResponse } from '../models/ResultResponse';
import { Location } from '../models/Location';
import { take, catchError } from 'rxjs/operators';
import { WEB_SERVICE_CONFIG } from '../provider-name-token';
import { WebServiceConfig } from '../web-service-config';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private endPoint: string = this.webServiceConfig.webServiceUrl + '/api/v1/locations'

  constructor(
    private http: HttpClient,
    @Inject(WEB_SERVICE_CONFIG) private webServiceConfig: WebServiceConfig
  ) { }

  handleError(error: HttpErrorResponse) {
    return throwError(error)
  }

  public getLocations(): Observable<ResultResponse<Location[]>> {
    return this.http.get<ResultResponse<Location[]>>(this.endPoint)
      .pipe(take(1), catchError(this.handleError))
  }

  public getLocationById(id: number) {

  }

  public createLocations(location: Location) {

  }

  public updateLocations(location: Location) {

  }
}
