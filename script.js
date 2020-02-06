let button = document.getElementById("enter");
let input = document.getElementById("user-input");
let ul = document.querySelector("ul#list");
let li = document.querySelectorAll("li");
let delButton = document.querySelectorAll("ul button");
// List item event handler
function liclickHandler() {
  this.classList.toggle("done");
}
const liAddClickEventListener = item => {
  item.addEventListener("click", liclickHandler);
};
// Add event handler to all existing li
li.forEach(liAddClickEventListener);

// delete button
function delButtonClickHandler() {
  const classId = this.classList[0];
  let list = document.querySelectorAll(`.${classId}`).forEach(e => e.remove());
}
const delButtonAddClickEventListener = item => {
  item.addEventListener("click", delButtonClickHandler);
};

delButton.forEach(delButtonAddClickEventListener);

button.addEventListener("click", () => {
  if (input.value.length) {
    createListItem();
  }
});
input.addEventListener("keydown", ({ isComposing, keyCode }) => {
  if ((isComposing || keyCode === 13) && input.value.length) {
    createListItem();
  }
});

// StackOverFlow, quite understandable
function makeid(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Create a `unique` id for each item-button pair, attach event listener, and add them to the DOM;
const createListItem = () => {
  var li = document.createElement("li");
  var button = document.createElement("button");
  const classId = makeid(8);
  li.classList.add(classId);
  button.classList.add(classId);
  button.innerText = "Delete";
  delButtonAddClickEventListener(button);
  liAddClickEventListener(li);
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  ul.appendChild(button);
  input.value = "";
};
