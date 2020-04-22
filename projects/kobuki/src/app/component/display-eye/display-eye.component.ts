import {Component, OnInit} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {KobukiService} from '../services/kobuki.services';
import {Router} from '@angular/router';

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
    this.sub = interval(1000).subscribe(x => {
      this.kobukiService.getJob().subscribe(data => {
        console.log(data[0]['status']);
        if (data[0]['status'] === 'running') {
          this.router.navigateByUrl('select');
          this.sub.unsubscribe();
        }
      });
    });


    // this.sub.unsubscribe(); // not work
  }


}
