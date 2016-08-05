import { bootstrap }                  from '@angular/platform-browser-dynamic';
import { enableProdMode, provide }    from '@angular/core';
import { HTTP_PROVIDERS }             from '@angular/http';
import { AppComponent }               from './app.component';
import { TodoService }                from './app/services/todo.service';
import { Utils }                      from './app/services/utils.factory';

enableProdMode();

bootstrap(AppComponent, [
  provide(Window, { useValue: window }),
  HTTP_PROVIDERS,
  TodoService,
  Utils
]);
