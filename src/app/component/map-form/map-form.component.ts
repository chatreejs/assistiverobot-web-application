import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-map-form',
  templateUrl: './map-form.component.html',
  styleUrls: ['./map-form.component.scss']
})
export class MapFormComponent implements OnInit {
  selectedStart = null;
  selectedDest = null;

  constructor(private router: Router,
              private message: NzMessageService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.selectedDest !== null && this.selectedDest !== null && this.selectedStart !== this.selectedDest) {
      this.router.navigateByUrl('/confirm', {state: {
          start: this.selectedStart,
          dest: this.selectedDest,
        }});
    } else {
      if (this.selectedStart === this.selectedDest) {
        this.message.create('error', 'สถานที่รับและสถานที่ส่งไม่สามารถเป็นที่เดียวกันได้');
      } else {
        this.message.create('error', 'กรุณาเลือกสถานที่รับและสถานที่ส่ง');
      }
    }
  }
}
