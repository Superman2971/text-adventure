import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';
import { Broadcaster } from '../broadcaster.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(
    private NavbarService: NavbarService,
    private Broadcaster:Broadcaster
  ) {}

  ngOnInit() {
    this.registerSubscribe();
  }

  registerSubscribe() {
    // subscribe for page navigation
    this.Broadcaster.on<string>('shNavbarUpdate').subscribe(response => {
      // this.showTabs = this.shNavbarService.navigationTabs;
      // this.showBreadcrumbs = this.shNavbarService.navigationBreadcrumbs;
      // this.headerData = this.shNavbarService.navigation;
    });
  }
}
