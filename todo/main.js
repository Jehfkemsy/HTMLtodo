
var addButton = document.getElementById("myButton");
var removeButton = document.getElementById("secondButton");
var todoItems = [];

addButton.addEventListener("click", () => {
    var input = document.getElementById("myInput").value;
    todoItems.push(input);
    var listContainer = document.getElementById("listContainer");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input));

    listContainer.appendChild(li);
});

removeButton.addEventListener('click', () => {
    var value = Number(document.getElementById("removeItem").value);
    var list = document.getElementById("listContainer");
    list.removeChild(list.childNodes[value - 1])
});