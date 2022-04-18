import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from '../../entities';
import { SubSink } from 'subsink';
import { Observable } from 'rxjs';
import { selectAllTasks } from '../../store/selectors/task.selector';
import { loadPastTasks, loadTodayTasks, loadUpcomingTasks } from '../../store/actions/task.action';

@Component({
  selector: 'tasker-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
