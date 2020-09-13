import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoalsService } from '../../core/services/goals.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnInit {

  public isConfirm: boolean = false
  private goalReceiverId: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private goalService: GoalsService
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
  }

  confirm(): void {
    this.goalService.updateGoals(this.goalReceiverId, 'success').subscribe((response) => {
      if (response.message === 'success') {
        this.isConfirm = !this.isConfirm
        setTimeout(() => {
          this.router.navigate(['../'], {
            relativeTo: this.route
          })
        }, 5000)
      }
    }, (error) => {
      console.log(error)
      return
    })
  }

}
