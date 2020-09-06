import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { LocationsService } from '../../core/services/locations.service';

@Component({
  selector: 'app-map-form',
  templateUrl: './map-form.component.html',
  styleUrls: ['./map-form.component.scss']
})
export class MapFormComponent implements OnInit {

  public locationList: Location[] = []
  public startLocation: string = null
  public destLocation: string = null

  constructor(
    private router: Router,
    private locationServiee: LocationsService,
    private message: NzMessageService) { }

  ngOnInit() {
    this.locationServiee.getLocations().subscribe((response) => {
      console.log(response)
    })
  }

  submit() {
    if (
      this.startLocation !== null &&
      this.destLocation !== null &&
      this.startLocation !== this.destLocation) {
      this.router.navigateByUrl('/confirm', {
        state: {
          start: this.startLocation,
          dest: this.destLocation
        }
      })
    } else {
      if (this.startLocation === this.destLocation) {
        this.message.create('error', 'สถานที่รับและสถานที่ส่งไม่สามารถเป็นที่เดียวกันได้')
      } else {
        this.message.create('error', 'กรุณาเลือกสถานที่รับและสถานที่ส่ง')
      }
    }
  }

}
