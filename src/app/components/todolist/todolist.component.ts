import { Component, OnInit, Input }     from '@angular/core';
import { Todo }                         from "./../../interfaces/todo.interface.ts";
import { TodoService }                  from './../../services/todo.service';
import { Utils }                        from './../../services/utils.factory';

@Component({
  selector:   'todos-list',
  template:   require('./todolist.component.html'),
  styles:     [require('./todolist.component.css')]
})
export class TodoList implements OnInit {

  @Input() todos: Todo[];

  constructor(private window: Window, private ts: TodoService, private utils: Utils) {}

  ngOnInit() {
    this.ts.todoSync.subscribe(
      todos => this.todos
    );
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
}
