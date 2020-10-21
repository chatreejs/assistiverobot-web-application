import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Location } from '../../../core/models/Location';
import { LocationsService } from '../../../core/services/locations.service';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss']
})
export class LocationFormComponent implements OnInit, OnDestroy {
  locationForm!: FormGroup
  locationId?: number

  isEditable: boolean

  private subscription = new Subscription()

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private locationService: LocationsService,
    // !BUGS
    // private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.isEditable = false

    this.locationForm = this.fb.group({
      name: ['', [Validators.required]],
      positionX: [null, [Validators.required, Validators.min(-100), Validators.max(100)]],
      positionY: [null, [Validators.required, Validators.min(-100), Validators.max(100)]],
      positionZ: [null, [Validators.required, Validators.min(-100), Validators.max(100)]],
      orientationX: [null, [Validators.required, Validators.min(-100), Validators.max(100)]],
      orientationY: [null, [Validators.required, Validators.min(-100), Validators.max(100)]],
      orientationZ: [null, [Validators.required, Validators.min(-100), Validators.max(100)]],
      orientationW: [null, [Validators.required, Validators.min(-100), Validators.max(100)]],
    })

    // If directly enter to edit user url (e.g. /edit?id=12)
    if (this.route.snapshot.queryParamMap.has('id')) {
      this.isEditable = true
      this.setEditModeAndLoadLocationData()
    } else {
      this.isEditable = false
    }

    // If select other user from url (e.g. change from /edit?id=12 to /edit?id=99)
    this.subscription.add(
      this.router.events
        .pipe(filter((event: RouterEvent) => event instanceof NavigationEnd))
        .subscribe((event) => {
          if (this.isEditable) {
            this.setEditModeAndLoadLocationData()
          }
        })
    )
  }

  setEditModeAndLoadLocationData(): void {
    this.locationId = +this.route.snapshot.queryParamMap.get('id')

    this.locationService.getLocationById(this.locationId).subscribe((response) => {
      const location = response.result
      this.initializeFormValue(location)
    })
  }

  initializeFormValue(location: Location): void {
    console.log(location)

    this.locationForm.patchValue({
      name: location.name,
      positionX: location.position.x,
      positionY: location.position.y,
      positionZ: location.position.z,
      orientationX: location.orientation.x,
      orientationY: location.orientation.y,
      orientationZ: location.orientation.z,
      orientationW: location.orientation.w,
    })
  }

  submitForm(): void {
    for (const i in this.locationForm.controls) {
      this.locationForm.controls[i].markAsDirty()
      this.locationForm.controls[i].updateValueAndValidity()
    }

    if (this.locationForm.invalid) {
      return
    }

    const locationRequest: Location = {
      name: this.locationForm.controls['name'].value,
      position: {
        x: this.locationForm.controls['positionX'].value,
        y: this.locationForm.controls['positionY'].value,
        z: this.locationForm.controls['positionZ'].value,
      },
      orientation: {
        x: this.locationForm.controls['orientationX'].value,
        y: this.locationForm.controls['orientationY'].value,
        z: this.locationForm.controls['orientationZ'].value,
        w: this.locationForm.controls['orientationW'].value,
      }
    }

    if (this.isEditable) {
      this.locationService.updateLocations(this.locationId, locationRequest).subscribe((response) => {
        console.log(response)
      }, (error) => {
        console.log(error)
      })
    } else {
      this.locationService.createLocations(locationRequest).subscribe((response) => {
        console.log(response)
      }, (error) => {
        console.log(error)
      })
    }
  }

  resetForm(): void {
    this.locationForm.reset({
      name: '',
      positionX: '',
      positionY: '',
      positionZ: '',
      orientationX: '',
      orientationY: '',
      orientationZ: '',
      orientationW: '',
    })
  }

  ngOnDestroy(): void {
    this.resetForm()
    this.subscription.unsubscribe()
  }

}
