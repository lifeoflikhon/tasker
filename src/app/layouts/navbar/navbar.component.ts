import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tasker-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menus: any[] = [
    { title: 'Dashboard', icon: 'table', url: '/dashboard' },
    { title: 'Projects', icon: 'cube', url: '/projects' },
    { title: 'Report', icon: 'chart-pie', url: '/report' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
