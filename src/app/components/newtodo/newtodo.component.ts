import { Component, ViewChild }   from '@angular/core';
import { TodoService }            from './../../services/todo.service';

@Component({
  selector: 'new-todo',
  template: require('./newtodo.component.html'),
  styles:   [require('./newtodo.component.css')]
})
export class NewTodo {

  @ViewChild('todoLabel') todoLabel;

  constructor(private window: Window, private ts: TodoService) {}

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
