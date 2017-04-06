import { Injectable } from '@angular/core';
import { Broadcaster } from '../broadcaster.service';

@Injectable()
export class NavbarService {
  constructor(private Broadcaster:Broadcaster) {}

  navigationTabs = true;
  navigationBreadcrumbs = false;
  navigation = [];

  setNavigation(typeTabs, typeBreadcrumbs, newNavigation) {
    this.navigationTabs = typeTabs;
    this.navigationBreadcrumbs = typeBreadcrumbs;
    this.navigation = newNavigation;
    this.Broadcaster.fire('shNavbarUpdate', 'event sent to navbar');
  }
}
