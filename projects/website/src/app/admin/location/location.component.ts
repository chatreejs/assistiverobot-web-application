import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Location } from '../../core/models/Location';
import { JobsService } from '../../core/services/jobs.service';
import { LocationsService } from '../../core/services/locations.service'
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  locationList: Location[] = []
  // statusList = ['pending', 'running', 'success', 'failed']
  // status: number | string

  constructor(private jobService: JobsService,private locationService: LocationsService) { }

  ngOnInit() {
    // this.status = 0
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

  // setFilter() {
  //   if (this.status == 0) {
  //     this.jobService.getJobs().subscribe((response) => {
  //       if (response == null) {
  //         this.jobList = []
  //         return
  //       }
  //       this.jobList = response.result
  //     }, (error: HttpErrorResponse) => {
  //       this.jobList = []
  //     })
  //   } else {
  //     this.jobService.getJobs(this.status as string).subscribe((response) => {
  //       if (response == null) {
  //         this.jobList = []
  //         return
  //       }
  //       this.jobList = response.result
  //     }, (error: HttpErrorResponse) => {
  //       this.jobList = []
  //     })
  //   }
  // }

}