import {Component, OnInit} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  constructor(private modalService: NzModalService) {
  }

  ngOnInit() {
  }

  success(): void {
    const modal = this.modalService.success({
      nzTitle: 'Order to Destination',
      nzContent: 'This modal will be destroyed after 5 second'
    });
    // Add API service
    setTimeout(() => modal.destroy(), 5000);
  }
}
