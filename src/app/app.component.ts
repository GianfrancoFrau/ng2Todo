import { Component, OnInit, Inject }    from '@angular/core';
import { TodoList }             from './components/todolist/todolist.component';
import { NewTodo }              from './components/newtodo/newtodo.component';
import { TodoService }          from './services/todo.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.css']
})
export class AppComponent implements OnInit {

  todos = [];

  constructor(private ts: TodoService) {
    this.todos = this.ts.getAll();
  }

  ngOnInit() {}
}
