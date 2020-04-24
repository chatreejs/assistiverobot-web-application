import {Component, OnInit} from '@angular/core';
import {KobukiService} from '../services/kobuki.services';
import {Router} from '@angular/router';
import {interval} from 'rxjs';

@Component({
  selector: 'app-carry-item',
  templateUrl: './carry-item.component.html',
  styleUrls: ['./carry-item.component.scss']
})
export class CarryItemComponent implements OnInit {
  sub = null;
  order = null;

  constructor(private kobukiService: KobukiService,
              private router: Router) {
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
    this.sub = interval(5000).subscribe(x => {
      this.kobukiService.getJob().subscribe(data => {
        if (data[0]['goal'][1]['status'] === 'arrived' || data[0]['goal'][1]['status'] === 'success') {
          this.router.navigateByUrl('recipe', {state: {confirm: true}});
          this.sub.unsubscribe();
        }
      }, error => {
        this.router.navigateByUrl('');
      });
    });
  }

}
