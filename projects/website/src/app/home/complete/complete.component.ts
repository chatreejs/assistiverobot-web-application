import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent implements OnInit {

  public formConfirm: boolean

  constructor(
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation()
    const state = navigation.extras.state as {
      confirm: boolean
    }

    try {
      this.formConfirm = state.confirm
    } catch (e) {
      this.router.navigate(['/'])
    }
  }
  ngOnInit() { }

}
