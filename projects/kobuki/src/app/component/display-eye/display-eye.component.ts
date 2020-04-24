import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { KobukiService } from '../services/kobuki.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-eye',
  templateUrl: './display-eye.component.html',
  styleUrls: ['./display-eye.component.scss']
})
export class DisplayEyeComponent implements OnInit {
  sub = null;

  constructor(private kobukiService: KobukiService,
              private router: Router) {
  }

  ngOnInit() {
    this.sub = interval(5000).subscribe(x => {
      this.kobukiService.getJob().subscribe(data => {
        this.kobukiService.goal_sender = data[0]['goal'][0]['goal_id']
        this.kobukiService.goal_recipent = data[0]['goal'][1]['goal_id']
        if (data[0]['goal'][0]['status'] === 'arrived') {
          this.router.navigateByUrl('select');
          this.sub.unsubscribe();
        }
      });
    });


    // this.sub.unsubscribe(); // not work
  }


}
