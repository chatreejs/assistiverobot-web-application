import { Injectable } from '@angular/core';
import { environment } from 'projects/website/src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ResultResponse } from '../models/ResultResponse';
import { Location } from '../models/Location';
import { take, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private endPoint: string = environment.baseUrl + '/api/v1/locations'

  constructor(
    private http: HttpClient
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
