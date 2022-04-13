import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from './layout/tasks/tasks.component';

export enum Status {
  Past = 'past',
  Today = 'today',
  Upcoming = 'upcoming',
}

@Component({
  selector: 'tasker-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if ( !params['status'] ) {
        this.router.navigate(['/', Status.Past]);
        return;
      }
    });
  }

}
