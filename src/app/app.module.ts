import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }   from './app.component';
import { TodoList }       from './components/todolist/todolist.component'
import { NewTodo }        from './components/newtodo/newtodo.component'
import { TodoService }    from './services/todo.service'
import { Utils }          from './services/utils.service'

@NgModule({
  declarations: [
    AppComponent,
    NewTodo,
    TodoList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TodoService,
    Utils
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
