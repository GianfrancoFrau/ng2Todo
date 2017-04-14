import { Component, OnInit, Input, Inject }     from '@angular/core';
import { Todo }                         from "./../../interfaces/todo.interface";
import { TodoService }                  from './../../services/todo.service';
import { Utils }                        from './../../services/utils.service';

@Component({
  selector:   'todos-list',
  templateUrl:   './todolist.component.html',
  styleUrls:     ['./todolist.component.css']
})
export class TodoList implements OnInit {

  @Input() todos: Todo[];
  showCompleted: boolean = true;
  completed: number = 0;

  constructor(@Inject(Window) private window: Window, private ts: TodoService, private utils: Utils) {}

  ngOnInit() {
    this.countCompleted();
    this.ts.todoSync.subscribe(todos => {
      this.todos = todos;
      this.countCompleted();
    });
  }

  countCompleted() {
    this.completed = 0;
    if(this.todos && this.todos.length) {
      this.todos.forEach((t) => {
        if(t.completed) {
          this.completed++;
        }
      });
    }
  }

  deleteTodo(t: Todo) {
    if(t) {
      this.ts.deleteTodo(t);
    }
  }

  getTodoDate(ts: number) {
    let date = new Date(ts)
      , d = this.utils.pad(date.getDate())
      , m = this.utils.pad(date.getMonth())
      , y = this.utils.pad(date.getFullYear())
      , h = this.utils.pad(date.getHours())
      , mn = this.utils.pad(date.getMinutes())
    return `${d}-${m}-${y} ${h}:${mn}`;
  }

  getStatusTitle(t: Todo) {
    if(t) {
      return t.completed ? 'Set as uncompleted' : 'Complete todo';
    }
  }

  toggleTodoStatus(t: Todo) {
    if(t) {
      this.ts.toggleTodoStatus(t);
    }
  }

  toggleShowCompleted() {
    this.showCompleted = !this.showCompleted
  }
}
