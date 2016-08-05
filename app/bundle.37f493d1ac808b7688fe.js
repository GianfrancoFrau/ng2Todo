webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var core_1 = __webpack_require__(5);
	var http_1 = __webpack_require__(328);
	var app_component_1 = __webpack_require__(349);
	var todo_service_1 = __webpack_require__(351);
	var utils_factory_1 = __webpack_require__(352);
	core_1.enableProdMode();
	platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
	    core_1.provide(Window, { useValue: window }),
	    http_1.HTTP_PROVIDERS,
	    todo_service_1.TodoService,
	    utils_factory_1.Utils
	]);


/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var todolist_component_1 = __webpack_require__(350);
	var newtodo_component_1 = __webpack_require__(355);
	var todo_service_1 = __webpack_require__(351);
	var AppComponent = (function () {
	    function AppComponent(window, ts) {
	        this.window = window;
	        this.ts = ts;
	        this.todos = [];
	        this.todos = this.ts.getAll();
	    }
	    AppComponent.prototype.ngOnInit = function () { };
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            template: __webpack_require__(358),
	            styles: [__webpack_require__(359)],
	            directives: [todolist_component_1.TodoList, newtodo_component_1.NewTodo]
	        }), 
	        __metadata('design:paramtypes', [Window, todo_service_1.TodoService])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var todo_service_1 = __webpack_require__(351);
	var utils_factory_1 = __webpack_require__(352);
	var TodoList = (function () {
	    function TodoList(window, ts, utils) {
	        this.window = window;
	        this.ts = ts;
	        this.utils = utils;
	        this.showCompleted = true;
	        this.completed = 0;
	    }
	    TodoList.prototype.ngOnInit = function () {
	        var _this = this;
	        this.countCompleted();
	        this.ts.todoSync.subscribe(function (todos) {
	            _this.todos = todos;
	            _this.countCompleted();
	        });
	    };
	    TodoList.prototype.countCompleted = function () {
	        var _this = this;
	        this.completed = 0;
	        if (this.todos && this.todos.length) {
	            this.todos.forEach(function (t) {
	                if (t.completed) {
	                    _this.completed++;
	                }
	            });
	        }
	    };
	    TodoList.prototype.deleteTodo = function (t) {
	        if (t) {
	            this.ts.deleteTodo(t);
	        }
	    };
	    TodoList.prototype.getTodoDate = function (ts) {
	        var date = new Date(ts), d = this.utils.pad(date.getDate()), m = this.utils.pad(date.getMonth()), y = this.utils.pad(date.getFullYear()), h = this.utils.pad(date.getHours()), mn = this.utils.pad(date.getMinutes());
	        return d + "-" + m + "-" + y + " " + h + ":" + mn;
	    };
	    TodoList.prototype.getStatusTitle = function (t) {
	        if (t) {
	            return t.completed ? 'Set as uncompleted' : 'Complete todo';
	        }
	    };
	    TodoList.prototype.toggleTodoStatus = function (t) {
	        if (t) {
	            this.ts.toggleTodoStatus(t);
	        }
	    };
	    TodoList.prototype.toggleShowCompleted = function () {
	        this.showCompleted = !this.showCompleted;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], TodoList.prototype, "todos", void 0);
	    TodoList = __decorate([
	        core_1.Component({
	            selector: 'todos-list',
	            template: __webpack_require__(353),
	            styles: [__webpack_require__(354)]
	        }), 
	        __metadata('design:paramtypes', [Window, todo_service_1.TodoService, utils_factory_1.Utils])
	    ], TodoList);
	    return TodoList;
	}());
	exports.TodoList = TodoList;


/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var TodoService = (function () {
	    function TodoService(window) {
	        this.window = window;
	        this.todos = [];
	        this.todoSync = new core_1.EventEmitter();
	        var _t = this.window.localStorage.getItem('todos');
	        var todos = _t ? JSON.parse(_t) : [];
	        if (todos.length) {
	            this.todos = todos;
	        }
	    }
	    TodoService.prototype.getAll = function () {
	        return this.todos;
	    };
	    TodoService.prototype.sync = function () {
	        this.window.localStorage.setItem('todos', JSON.stringify(this.todos));
	        this.todoSync.emit(this.todos);
	    };
	    TodoService.prototype.addTodo = function (t) {
	        this.todos.unshift(t);
	        this.sync();
	    };
	    TodoService.prototype.deleteTodo = function (t) {
	        var found = this.todos.filter(function (todo) {
	            return t.ts === todo.ts;
	        });
	        if (found) {
	            var index = this.todos.indexOf(t);
	            this.todos.splice(index, 1);
	            this.sync();
	        }
	        else {
	            console.error('Todo not found', t);
	        }
	    };
	    TodoService.prototype.toggleTodoStatus = function (t) {
	        var found = this.todos.filter(function (todo) {
	            return t.ts === todo.ts;
	        });
	        if (found) {
	            var index = this.todos.indexOf(t);
	            this.todos[index].completed = !this.todos[index].completed;
	            this.todos[index].completionDate = Date.now();
	            this.sync();
	        }
	        else {
	            console.error('Todo not found', t);
	        }
	    };
	    TodoService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [Window])
	    ], TodoService);
	    return TodoService;
	}());
	exports.TodoService = TodoService;


/***/ },

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var Utils = (function () {
	    function Utils() {
	    }
	    Utils.prototype.pad = function (n) {
	        return n > 9 ? '' + n : '0' + n;
	    };
	    Utils = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], Utils);
	    return Utils;
	}());
	exports.Utils = Utils;


/***/ },

/***/ 353:
/***/ function(module, exports) {

	module.exports = "<h2 *ngIf=\"!todos.length\" id=\"todos-empty\">\n  <i class=\"ion-beer\"></i>\n  you don't have any todo right now!\n</h2>\n<h2 *ngIf=\"todos.length\">\n  Todos list\n</h2>\n<a href=\"#\" (click)=\"toggleShowCompleted()\" *ngIf=\"completed > 0\">\n  <span [hidden]=\"showCompleted\">show</span>\n  <span [hidden]=\"!showCompleted\">hide</span>\n  <span><b>{{ completed }}</b> completed</span>\n</a>\n<ul id=\"todosList\">\n  <li *ngFor=\"let todo of todos\" [hidden]=\"todo.completed && !showCompleted\">\n    <div class=\"pure-g\">\n      <div class=\"pure-u-3-24\">\n        <a href=\"#\" (click)=\"toggleTodoStatus(todo)\" title=\"{{ getStatusTitle(todo) }}\">\n          <i class=\"complete-btn\" [ngClass]=\"{ 'ion-ios-circle-outline': !todo.completed, 'ion-checkmark-circled': todo.completed }\"></i>\n        </a>\n      </div>\n      <div class=\"pure-u-19-24 todo-label-container\">\n          <span [ngClass]=\"{ 'todo-completed': todo.completed }\">{{ todo.label }}</span>\n          <span class=\"todo-date\">\n            {{ getTodoDate(todo.ts) }}\n            <span *ngIf=\"todo.completed\">\n              - completed on {{ getTodoDate(todo.completionDate) }}\n            </span>\n          </span>\n      </div>\n      <div class=\"pure-u-1-24\">\n        <a href=\"#\" (click)=\"deleteTodo(todo)\" title=\"Delete\">\n          <i class=\"ion-ios-close-outline\"></i>\n        </a>\n      </div>\n    </div>\n  </li>\n</ul>\n"

/***/ },

/***/ 354:
/***/ function(module, exports) {

	module.exports = "#todosList {\n  list-style: none;\n  padding: 0;\n}\n#todosList li {\n  padding: 10px 0;\n  /*border-bottom: 1px solid gray;*/\n}\n#todos-empty {\n  text-align: center;\n  margin-top: 40px;\n  font-size: 24px;\n}\n.todo-date {\n  display: block;\n  font-size: 10px;\n  color: gray;\n}\n.todo-completed {\n  color: gray;\n  font-style: italic;\n}\n.complete-btn {\n  font-size: 30px;\n}\n.todo-label-container {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n"

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var todo_service_1 = __webpack_require__(351);
	var NewTodo = (function () {
	    function NewTodo(window, ts) {
	        this.window = window;
	        this.ts = ts;
	    }
	    NewTodo.prototype.handleKeypress = function ($event) {
	        if ($event.keyCode === 13) {
	            this.saveTodo();
	        }
	    };
	    NewTodo.prototype.saveTodo = function () {
	        var label = this.todoLabel.nativeElement.value;
	        if (label === '')
	            return;
	        this.ts.addTodo({
	            label: label,
	            completed: false,
	            ts: Date.now()
	        });
	        this.todoLabel.nativeElement.value = '';
	    };
	    __decorate([
	        core_1.ViewChild('todoLabel'), 
	        __metadata('design:type', Object)
	    ], NewTodo.prototype, "todoLabel", void 0);
	    NewTodo = __decorate([
	        core_1.Component({
	            selector: 'new-todo',
	            template: __webpack_require__(356),
	            styles: [__webpack_require__(357)]
	        }), 
	        __metadata('design:paramtypes', [Window, todo_service_1.TodoService])
	    ], NewTodo);
	    return NewTodo;
	}());
	exports.NewTodo = NewTodo;


/***/ },

/***/ 356:
/***/ function(module, exports) {

	module.exports = "<form class=\"pure-form\">\n    <fieldset>\n        <input  type=\"text\"\n                placeholder=\"Write a new todo and press ENTER\"\n                #todoLabel\n                class=\"pure-u-1 pure-input-rounded\"\n                (keypress)=\"handleKeypress($event);\"/>\n\n        <!--\n        <button type=\"button\"\n                class=\"pure-button pure-button-primary\"\n                (click)=\"saveTodo(todoLabel.value); todoLabel.value = ''\">\n                save\n        </button>\n    -->\n    </fieldset>\n</form>\n"

/***/ },

/***/ 357:
/***/ function(module, exports) {

	module.exports = ""

/***/ },

/***/ 358:
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\n    <h2>\n        <span id=\"title-icon\">\n            <i class=\"ion-android-checkmark-circle\"></i>\n        </span>\n        <span id=\"title-text\">\n            <span class=\"angular\">ng2</span> Todo\n        </span>\n    </h2>\n    <new-todo></new-todo>\n    <todos-list [todos]=\"todos\"></todos-list>\n</div>\n"

/***/ },

/***/ 359:
/***/ function(module, exports) {

	module.exports = ".container {\n  width: 40%;\n  min-width: 320px;\n  max-width: 800px;\n  background-color: #fff;\n  margin: 50px auto 0 auto;\n  padding: 15px;\n}\nh1 {\n  margin: 0;\n}\n#title-icon {\n  display: block;\n  text-align: center;\n  font-size: 50px;\n}\n#title-text {\n  display: block;\n  text-align: center;\n}\n.angular {\n  color: #e74c3c;\n}\n"

/***/ }

});