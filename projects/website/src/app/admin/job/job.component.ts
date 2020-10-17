import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  listOfData = [
    {
      ID: '1',
      Status: 'Running',
      Date: '9/30/2020 11:08PM'
    },
    {
      ID: '2',
      Status: 'Pending',
      Date: '9/30/2020 11:09PM'
    },
    {
      ID: '1',
      Status: 'Running',
      Date: '9/30/2020 11:08PM'
    },
    {
      ID: '2',
      Status: 'Pending',
      Date: '9/30/2020 11:09PM'
    },
    {
      ID: '1',
      Status: 'Running',
      Date: '9/30/2020 11:08PM'
    },
    {
      ID: '2',
      Status: 'Pending',
      Date: '9/30/2020 11:09PM'
    },
    {
      ID: '1',
      Status: 'Running',
      Date: '9/30/2020 11:08PM'
    },
    {
      ID: '2',
      Status: 'Pending',
      Date: '9/30/2020 11:09PM'
    },
    {
      ID: '1',
      Status: 'Running',
      Date: '9/30/2020 11:08PM'
    },
    {
      ID: '2',
      Status: 'Pending',
      Date: '9/30/2020 11:09PM'
    },
    {
      ID: '1',
      Status: 'Running',
      Date: '9/30/2020 11:08PM'
    },
    {
      ID: '2',
      Status: 'Pending',
      Date: '9/30/2020 11:09PM'
    },
    
  ];
  constructor() { }

  ngOnInit() {
  }

}