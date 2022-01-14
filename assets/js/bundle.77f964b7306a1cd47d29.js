/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/assets/js/components/Todo.ts
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Todo = /*#__PURE__*/function () {
  function Todo() {
    _classCallCheck(this, Todo);
  }

  _createClass(Todo, [{
    key: "initialize",
    value: function initialize() {
      this.initAddTodo();
    }
  }, {
    key: "initAddTodo",
    value: function initAddTodo() {
      var input = document.querySelector('.add-todo input');
      input.addEventListener('keydown', function (event) {
        if (event.code === 'Enter') {
          var localTodos = window.localStorage.getItem('todos');
          var todos;

          if (localTodos) {
            todos = JSON.parse(localTodos);
            todos.push(input.value);
          } else {
            todos = [input.value];
          }

          window.localStorage.setItem('todos', JSON.stringify(todos));
          input.value = '';
        }
      });
    }
  }]);

  return Todo;
}();

/* harmony default export */ var components_Todo = (Todo);
;// CONCATENATED MODULE: ./src/assets/js/index.ts

var TodoInstance = new components_Todo();
TodoInstance.initialize();
/******/ })()
;