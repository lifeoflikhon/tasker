import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, take, takeLast } from 'rxjs';
import { Project, Task, User } from '../../entities';
import { Store } from '@ngrx/store';
import { selectAllTasks } from '../../store/selectors/task.selector';
import { getTaskById, updateTask } from '../../store/actions/task.action';
import { selectAllProjects, selectProjects } from '../../store/selectors/project.selector';
import { loadProjects } from '../../store/actions/project.action';
import { AppState } from '../../store/app-state';

@Component({
  selector: 'tasker-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  public task$: Observable<Task> = this.store.select(selectAllTasks).pipe(
    map(tasks => tasks.find(task => task.id === +this.activatedRoute.snapshot.params.id))
  );

  public remindMeTimes: number[] = [5, 10, 15, 30];
  public projects$: Observable<Project[]> = this.store.select(selectAllProjects);
  public users: User[] = [];
  public priorities: string[] = ['Low', 'Medium', 'High'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(params => {
        const taskId = +params['id'];
        this.store.dispatch(getTaskById({ taskId }));
      });

    this.store.dispatch(loadProjects());
  }

  back() {
    history.back();
  }

  updatePriority( $event: any, task: Task ) {
    const priority = $event.target.value;
    const updatedTask = { ...task, priority };
    this.store.dispatch(updateTask({ task: updatedTask }));
  }

  updateDescription( $event: any, task: Task ) {
    const description = $event.target.value;
    const updatedTask = { ...task, description };
    this.store.dispatch(updateTask({ task: updatedTask }));
  }

  updateProject( $event: any, task: Task, projects: Project[] ) {
    const projectId = $event.target.value;
    const updatedTask = { ...task, project: projects.find(project => project.id === +projectId) };
    this.store.dispatch(updateTask({ task: updatedTask }));
  }

  updateAssignee( $event: any, task: Task, users: User[] ) {
    const userId = $event.target.value;
    const updatedTask = { ...task, assignee: users.find(user => user.id === +userId) };
    this.store.dispatch(updateTask({ task: updatedTask }));
  }

  updateRemindBefore($event: any, task: Task) {
    const remindBefore = $event.target.value;
    const updatedTask = { ...task, remindBefore };
    this.store.dispatch(updateTask({ task: updatedTask }));
  }
}
