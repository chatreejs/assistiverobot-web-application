import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-display-eye',
  templateUrl: './display-eye.component.html',
  styleUrls: ['./display-eye.component.scss']
})
export class DisplayEyeComponent implements OnInit {
  sub = null;

  constructor() {
  }

  ngOnInit() {
    this.sub = interval(1000).subscribe(x => {
      console.log('tar');
    });
    // this.sub.unsubscribe(); // not work
  }


}
