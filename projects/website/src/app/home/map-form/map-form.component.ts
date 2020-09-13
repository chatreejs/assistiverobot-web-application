import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { LocationsService } from '../../core/services/locations.service';
import { Location } from '../../core/models/Location';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-map-form',
  templateUrl: './map-form.component.html',
  styleUrls: ['./map-form.component.scss']
})
export class MapFormComponent implements OnInit {

  public locationList: Location[] = []
  public locationForm: FormGroup

  public get startLocation(): number {
    return this.locationForm.get('startLocation').value
  }

  public get destLocation(): number {
    return this.locationForm.get('destLocation').value
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private locationServiee: LocationsService,
    private message: NzMessageService) { }

  ngOnInit() {
    this.locationForm = new FormGroup({
      startLocation: new FormControl(null, Validators.required),
      destLocation: new FormControl(null, Validators.required)
    })

    this.locationServiee.getLocations().subscribe((response) => {
      this.locationList = response.result
    })
  }

  submit(): void {
    if (this.locationForm.invalid) {
      this.message.create('error', 'กรุณาเลือกสถานที่รับและสถานที่ส่ง')
      return
    }

    if (this.startLocation === this.destLocation) {
      this.message.create('error', 'สถานที่รับและสถานที่ส่งไม่สามารถเป็นที่เดียวกันได้')
    } else {
      this.router.navigate(['confirm'], {
        relativeTo: this.route,
        state: {
          start: this.startLocation,
          dest: this.destLocation
        }
      })
    }
  }

}
