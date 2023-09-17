import inquirer from "inquirer";
let todos = [];
let yourtodos = true;
while (yourtodos) {
    let input = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "write your todo : "
        },
        {
            type: "confirm",
            name: "addmoertodos",
            message: "write your more todos : ",
            // default:false
        }
    ]);
    let { TODO, addmoretodos } = input;
    // console.log(input);
    yourtodos = addmoretodos;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("this is done your TODOS !");
    }
}
//  console.log(todos)
if (todos.length) {
    console.log("your todo list is :");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("No more todos  ! ");
}
