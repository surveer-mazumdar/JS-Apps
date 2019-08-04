"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    //`The ToDo with ID: ${todo.Id}` accesing capital Id will show error by red underline. Following Interface
    printToDo(todo.id, todo.title, todo.completed);
});
var printToDo = function (id, title, completed) {
    console.log("\n        The ToDo with ID: " + id + "\n        Title: " + title + "\n        Is it completed? : " + completed + "\n    ");
};
