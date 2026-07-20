  let counter = 1;
  let todo_number = 1;

  function deleteTodo(index) {
    console.log("Delete called!")

    const element = document.getElementById(index);
    element.parentNode.removeChild(element);
  }

  function addTodo() {
    const inputElement = document.querySelector("input");
    const value = inputElement.value;

    const spanElement = document.createElement("span");
    spanElement.innerHTML = value;

    const currentId = counter;

    const buttonElement = document.createElement("button");
    buttonElement.innerHTML = "Delete"
    buttonElement.onclick = function() {
      deleteTodo(currentId);
    };

    const newDivElement = document.createElement("div");
    newDivElement.setAttribute("id", counter);

    newDivElement.appendChild(spanElement);
    newDivElement.appendChild(buttonElement);

    document.querySelector("body").appendChild(newDivElement); 
    
    counter++;
  }