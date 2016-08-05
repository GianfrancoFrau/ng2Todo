import { Component, OnInit }    from '@angular/core';
import { TodoList }             from './app/components/todolist/todolist.component';
import { NewTodo }              from './app/components/newtodo/newtodo.component';
import { TodoService }          from './app/services/todo.service';

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles:   [require('./app.component.css')],
  directives: [TodoList, NewTodo]
})
export class AppComponent implements OnInit {

  todos = [];

  constructor(private window: Window, private ts: TodoService) {
    this.todos = this.ts.getAll();
  }

  ngOnInit() {}
}
