import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  public startLocation: string = null
  public destLocation: string = null

  constructor(
    private router: Router,
    private message: NzMessageService
  ) {
    const navigation = this.router.getCurrentNavigation()
    const state = navigation.extras.state as {
      start: string
      dest: string
    }

    try {
      this.startLocation = state.start
      this.destLocation = state.dest
    } catch (e) {
      this.router.navigate(['/'])
    }
  }

  ngOnInit() { }

  submit() {
    // const resultStart = environment.mock_data.filter(x => {
    //     return x.point === this.start;
    //   }
    // ).map(({point, ...detail}) => detail);
    // const resultDest = environment.mock_data.filter(x => {
    //     return x.point === this.dest;
    //   }
    // ).map(({point, ...detail}) => detail);

    // this.robotService.postJob({goal: [...resultStart, ...resultDest]},
    //   () => {
    //     this.router.navigateByUrl('/complete', {state: {confirm: true}});
    //   }, () => {
    //     this.message.create('error', 'เกิดข้อผิดพลาดกับเซิฟเวอร์ ไม่สามารถดำเนินการได้');
    //   });
  }

}
