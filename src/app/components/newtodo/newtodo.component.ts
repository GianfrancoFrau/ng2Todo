import { Component, ViewChild, Inject }   from '@angular/core';
import { TodoService }            from './../../services/todo.service';

@Component({
  selector: 'new-todo',
  templateUrl: './newtodo.component.html',
  styleUrls:   ['./newtodo.component.css']
})
export class NewTodo {

  @ViewChild('todoLabel') todoLabel;

  constructor(private ts: TodoService) {}

  handleKeypress($event) {
    if($event.keyCode === 13) {
      this.saveTodo();
    }
  }

  saveTodo() {
    let label = this.todoLabel.nativeElement.value;
    if(label === '') return;
    this.ts.addTodo({
      label: label,
      completed: false,
      ts: Date.now()
    });
    this.todoLabel.nativeElement.value = '';
  }
}
