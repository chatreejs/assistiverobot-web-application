import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { JobsService } from '../../core/services/jobs.service';
import { JobRequest } from '../../core/models/requests/JobRequest';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  public startLocation: number
  public destLocation: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jobService: JobsService,
    private message: NzMessageService
  ) {
    const navigation = this.router.getCurrentNavigation()
    const state = navigation.extras.state as {
      start: number
      dest: number
    }

    try {
      this.startLocation = state.start
      this.destLocation = state.dest
    } catch (e) {
      this.router.navigate([''])
    }
  }

  ngOnInit() { }

  submit() {
    const jobRequest: JobRequest = {
      start: this.startLocation,
      destination: this.destLocation
    }
    this.jobService.createJob(jobRequest).subscribe((response) => {
      if (response.message == "success") {
        this.router.navigate(['../complete'], {
          relativeTo: this.route,
          state: {
            confirm: true
          }
        })
      }
    }, (errror) => {
      console.error(errror)
      this.message.create('error', 'เกิดข้อผิดพลาดกับเซิฟเวอร์ ไม่สามารถดำเนินการได้')
    })
  }

}
