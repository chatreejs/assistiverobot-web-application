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

  constructor() { }

  ngOnInit() { }

}