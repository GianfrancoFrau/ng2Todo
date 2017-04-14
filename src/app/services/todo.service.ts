import { Injectable, EventEmitter, Inject} from '@angular/core';
import { Todo }                     from "./../interfaces/todo.interface";

@Injectable()
export class TodoService {

  todos = [];
  todoSync: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(Window) private window: Window) {
    let _t = this.window.localStorage.getItem('todos');
    let todos = _t ? JSON.parse(_t) : []
    if(todos.length) {
      this.todos = todos;
    }
  }

  getAll() {
    return this.todos;
  }

  sync() {
    this.window.localStorage.setItem('todos', JSON.stringify(this.todos));
    this.todoSync.emit(this.todos);
  }

  addTodo(t: Todo) {
    this.todos.unshift(t);
    this.sync();
  }

  deleteTodo(t: Todo) {
    let found = this.todos.filter((todo) => {
      return t.ts === todo.ts
    });
    if(found) {
      let index = this.todos.indexOf(t);
      this.todos.splice(index, 1);
      this.sync();
    } else {
      console.error('Todo not found', t);
    }
  }

  toggleTodoStatus(t: Todo) {
    let found = this.todos.filter((todo) => {
      return t.ts === todo.ts
    });
    if(found) {
      let index = this.todos.indexOf(t);
      this.todos[index].completed = !this.todos[index].completed;
      this.todos[index].completionDate = Date.now();
      this.sync();
    } else {
      console.error('Todo not found', t);
    }
  }
}
