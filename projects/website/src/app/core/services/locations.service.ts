import { Injectable } from '@angular/core';
import { environment } from 'projects/kobuki/src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultResponse } from '../models/ResultResponse';
import { Location } from '../models/Location';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private endPoint: string = environment.baseUrl + '/api/v1/locations'

  constructor(
    private http: HttpClient
  ) { }

  public getLocations(): Observable<ResultResponse<Location>> {
    return this.http.get<ResultResponse<Location>>(this.endPoint)
  }

  public getLocationById(id: number) {

  }
  
  public createLocations(location: Location) {
    
  }
  
  public updateLocations(location: Location) {

  }
}
