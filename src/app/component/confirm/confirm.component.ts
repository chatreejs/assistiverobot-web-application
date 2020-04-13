import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {RobotService} from '../services/robot.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  start = null;
  dest = null;

  constructor(private robotService: RobotService,
              private router: Router,
              private message: NzMessageService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      start: string,
      dest: string,
    };
    try {
      this.start = state.start;
      this.dest = state.dest;
    } catch (e) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    const result = environment.mock_data.filter(x => {
        return x.point === this.start;
      }
    );
  }

  onConfirm() {
    const resultStart = environment.mock_data.filter(x => {
        return x.point === this.start;
      }
    ).map(({point, ...detail}) => detail);
    const resultDest = environment.mock_data.filter(x => {
        return x.point === this.dest;
      }
    ).map(({point, ...detail}) => detail);

    this.robotService.postJob({goal: [...resultStart, ...resultDest]},
      () => {
        this.router.navigateByUrl('/complete', {state: {confirm: true}});
      }, () => {
        this.message.create('error', 'Server has problem');
      });


  }

}
