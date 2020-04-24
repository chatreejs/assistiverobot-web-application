import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {KobukiService} from '../services/kobuki.services';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  showThankyou = false;
  order = null;

  constructor(private router: Router,
              private kobukiService: KobukiService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      confirm: boolean;
    };
    try {
      this.order = state.confirm;
    } catch (e) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.kobukiService.getJob().subscribe(data => {
      if (data[0]['goal'][1]['status'] === 'success') {
        this.router.navigateByUrl('');
      }
    });
  }

  clickRecipe(): void {
    this.showThankyou = true;
    // Add API
    this.kobukiService.updateGoalStatus(false);
    setTimeout(() => {    //<<<---    using ()=> syntax

      this.showThankyou = false;
      this.router.navigateByUrl('');
    }, 10000);
  }
}
