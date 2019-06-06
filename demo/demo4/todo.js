angular.module('todoApp', ['multipleSelect'])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'learn AngularJS', done:true},
      {text:'build an AngularJS app', done:false}];

    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };
todoList.datasel1=[];
todoList.data={"selected":"select"};
    
    todoList.data.op = [
      {name:"main1",value:true},
      {name:"main2",value:true},
      {name:"main3",value:true},
      {name:"main4",value:true},
      {name:"main5",value:true},
      {name:"main6",value:true},
      {name:"main7",value:true},
      {name:"main8",value:true},
      {name:"main9",value:true}
    ];
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });


/*
Copyright 2019 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/