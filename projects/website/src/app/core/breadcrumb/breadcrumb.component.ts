import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'toktak-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {

  public breadcrumbs: BreadcrumbConfig[] = []

  @HostBinding('class.hidden')
  public hidden = true

  private routerSubscription: Subscription

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.updateBreadcrumb()
    this.routerSubscription = this.router.events
      .pipe(filter((event: RouterEvent) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateBreadcrumb()
      })
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe()
    this.routerSubscription = null
    this.breadcrumbs = null
  }

  private updateBreadcrumb(): void {
    this.breadcrumbs = this.getBreadcrumb(this.route.snapshot)
    this.hidden = this.breadcrumbs.length === 0
  }

  private getBreadcrumb(
    routeSnapshot: ActivatedRouteSnapshot,
    config: BreadcrumbConfig[] = [],
    tempPaths: string[] = ['/']
  ): BreadcrumbConfig[] {
    if (routeSnapshot.children.length > 0) {
      if (routeSnapshot.children[0].routeConfig.data.breadcrumb) {
        tempPaths.push(routeSnapshot.routeConfig.path || routeSnapshot.children[0].routeConfig.path)
        const breadcrumbConfig: BreadcrumbConfig = {
          path: [...tempPaths],
          label: routeSnapshot.children[0].routeConfig.data.breadcrumb
        }
        config.push(breadcrumbConfig)
      }
      return this.getBreadcrumb(routeSnapshot.children[0], config, tempPaths)
    } else {
      return config
    }
  }
}

interface BreadcrumbConfig {
  path: string[];
  label: string;
}