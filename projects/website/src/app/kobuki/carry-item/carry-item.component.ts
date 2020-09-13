import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { JobsService } from '../../core/services/jobs.service';

@Component({
  selector: 'app-carry-item',
  templateUrl: './carry-item.component.html',
  styleUrls: ['./carry-item.component.scss']
})
export class CarryItemComponent implements OnInit {

  private counter = interval(5000)
  private goalReceiverId: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jobService: JobsService
  ) {
    const navigation = this.router.getCurrentNavigation()
    const state = navigation.extras.state as {
      goalReceiverId: number
    }

    try {
      this.goalReceiverId = state.goalReceiverId
    } catch (e) {
      this.router.navigate(['../'], {
        relativeTo: this.route
      })
    }
  }

  ngOnInit() {
    const subscription = this.counter.subscribe(s => {
      this.jobService.getJobs("pending", 1).subscribe((response) => {
        const result = response.result[0]
        const goalReceiverId = result.goal[1].goal_id

        if (
          result.goal[1].status === 'arrived' ||
          result.goal[1].status === 'success'
        ) {
          this.router.navigate(['../receiver'], {
            relativeTo: this.route,
            state: {
              goalReceiverId: goalReceiverId
            }
          })
          subscription.unsubscribe()
        }
      })
    })
  }

}
