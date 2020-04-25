import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KobukiService } from '../services/kobuki.services';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent implements OnInit {

  showThankyou = false;
  order = null;

  constructor(private router: Router,
              private kobukiService: KobukiService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      confirm: boolean;
    };
    try {
      this.order = state.confirm;
    } catch (e) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.kobukiService.getJob().subscribe(data => {
      if (data[0]['goal'][0]['status'] === 'success') {
        this.router.navigateByUrl('carry', { state: { confirm: true } });
      } else if (data === null) {
        this.router.navigateByUrl('')
      }
    });
  }

  clickSender(): void {
    this.showThankyou = true;
    this.kobukiService.updateGoalStatus(true);
    setTimeout(() => {    //<<<---    using ()=> syntax
      this.showThankyou = false;
      this.router.navigateByUrl('carry', { state: { confirm: true } });
    }, 10000);
  }
}
