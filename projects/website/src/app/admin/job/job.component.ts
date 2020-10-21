import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Job } from '../../core/models/Job';
import { JobsService } from '../../core/services/jobs.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  jobList: Job[] = []
  statusList = ['pending', 'running', 'success', 'failed']
  status: number | string

  constructor(private jobService: JobsService) { }

  ngOnInit() {
    this.status = 0
    this.jobService.getJobs().subscribe((response) => {
      if (response == null) {
        this.jobList = []
        return
      }
      this.jobList = response.result
    }, (error: HttpErrorResponse) => {
      this.jobList = []
    })
  }

  setFilter() {
    if (this.status == 0) {
      this.jobService.getJobs().subscribe((response) => {
        if (response == null) {
          this.jobList = []
          return
        }
        this.jobList = response.result
      }, (error: HttpErrorResponse) => {
        this.jobList = []
      })
    } else {
      this.jobService.getJobs(this.status as string).subscribe((response) => {
        if (response == null) {
          this.jobList = []
          return
        }
        this.jobList = response.result
      }, (error: HttpErrorResponse) => {
        this.jobList = []
      })
    }
  }

}