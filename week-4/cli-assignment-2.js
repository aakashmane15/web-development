const fs = require("fs");
const { Command } = require("commander");
const { json } = require("stream/consumers");
const program = new Command();

program
    .name("todo")
    .description("CLI based To-Do list application")
    .version("1.0.0");

function loadTodos() {
    const data = fs.readFileSync("todos.json", "utf-8");
    return JSON.parse(data);
}

function saveTodos(todos) {
    fs.writeFileSync("todos.json", JSON.stringify(todos, null, 2));
}

program
    .command("add")
    .description("Add a To-Do")
    .argument("<task>", "task to add")
    .action((task) => {
        const todos = loadTodos();

        const newTodo = {
            id: Date.now(),
            task: task,
            done: false
        };

        todos.push(newTodo);
        saveTodos(todos);

        console.log("To-Do added!", task);
    });

program
    .command("delete")
    .description("Delete a To-Do")
    .argument("<id>", "ID of To-Do to be deleted")
    .action((id) => {
        const todos = loadTodos();
        const updatedTodos = todos.filter(todo => todo.id != id);

        saveTodos(updatedTodos);

        console.log("To-do Deleted!", id);
    });

program 
    .command("done")
    .description("Mark a To-Do as done")
    .argument("<id>", "ID of the To-Do to be marked as done")
    .action((id) => {
        const todos = loadTodos();
        const index = todos.findIndex(todo => todo.id == id);

        if (index == -1) {
            console.log("To-Do not found!");
            return;
        }

        todos[index].done = true;

        saveTodos(todos);

        console.log("To-Do marked as done!", id);
    });

program.parse();
