import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {
  showThankyou = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  click(): void {
    this.showThankyou = true;
    // Add API

    setTimeout(() => {    //<<<---    using ()=> syntax
      this.router.navigateByUrl('')
    }, 5000);
  }
}
