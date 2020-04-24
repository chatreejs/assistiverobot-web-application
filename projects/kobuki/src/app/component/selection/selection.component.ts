import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { KobukiService } from "../services/kobuki.services";

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {
  showThankyou = false;
  sender = true;

  constructor(private router: Router,
              private kobukiService: KobukiService) {
  }

  ngOnInit() {
  }

  clickSender(): void {
    this.showThankyou = true;
    this.sender = false;
    // Add API
  this.kobukiService.updateGoalStatus(true);
    setTimeout(() => {    //<<<---    using ()=> syntax
      this.showThankyou = false
      this.router.navigateByUrl('carry')
    }, 5000);

  }

  clickRecipe(): void{
    this.showThankyou = true;
    this.sender = true;
    // Add API
    this.kobukiService.updateGoalStatus(false);
    setTimeout(() => {    //<<<---    using ()=> syntax

      this.showThankyou = false;
      this.router.navigateByUrl('')
    }, 5000);
  }
}
