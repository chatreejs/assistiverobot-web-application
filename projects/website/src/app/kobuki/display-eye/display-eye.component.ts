import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { JobsService } from '../../core/services/jobs.service';

@Component({
  selector: 'app-display-eye',
  templateUrl: './display-eye.component.html',
  styleUrls: ['./display-eye.component.scss']
})
export class DisplayEyeComponent implements OnInit {

  private counter = interval(5000)

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jobService: JobsService
  ) { }

  ngOnInit() {
    const subscription = this.counter.subscribe(s => {
      this.jobService.getJobs("pending", 1).subscribe((response) => {
        const result = response.result[0]
        const goalSenderId = result.goal[0].goal_id
        const goalReceiverId = result.goal[1].goal_id

        if (
          result.goal[0].status === 'arrived' ||
          result.goal[0].status === 'success'
        ) {
          this.router.navigate(['sender'], {
            relativeTo: this.route,
            state: {
              goalSenderId: goalSenderId,
              goalReceiverId: goalReceiverId
            }
          })
          subscription.unsubscribe()
        }
      })
    })
  }

}
