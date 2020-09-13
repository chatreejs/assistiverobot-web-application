import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoalsService } from '../../core/services/goals.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent implements OnInit {

  public isConfirm: boolean = false
  private goalSenderId: number
  private goalReceiverId: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private goalService: GoalsService
  ) {
    const navigation = this.router.getCurrentNavigation()
    const state = navigation.extras.state as {
      goalSenderId: number
      goalReceiverId: number
    }

    try {
      this.goalSenderId = state.goalSenderId
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
    this.goalService.updateGoals(this.goalSenderId, 'success').subscribe((response) => {
      if (response.message === 'success') {
        this.isConfirm = !this.isConfirm
        setTimeout(() => {
          this.router.navigate(['../carry'], {
            relativeTo: this.route,
            state: {
              goalReceiverId: this.goalReceiverId
            }
          })
        }, 5000)
      }
    }, (error) => {
      console.log(error)
      return
    })
  }

}
