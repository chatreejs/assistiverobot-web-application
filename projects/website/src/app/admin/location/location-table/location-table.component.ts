import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Location } from '../../../core/models/Location';
import { LocationsService } from '../../../core/services/locations.service';

@Component({
  selector: 'app-location-table',
  templateUrl: './location-table.component.html',
  styleUrls: ['./location-table.component.scss']
})
export class LocationTableComponent implements OnInit {
  locationList: Location[] = []

  constructor(private locationService: LocationsService) { }

  ngOnInit() {
    this.locationService.getLocations().subscribe((response) => {
      if (response == null) {
        this.locationList = []
        return
      }
      this.locationList = response.result
    }, (error: HttpErrorResponse) => {
      this.locationList = []
    })
  }

}
