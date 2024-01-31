const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const dateBox = document.getElementById("date-box");

function addTask() {
  if (inputBox.value === "" || dateBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let date = document.createElement("date");
    date.innerHTML = dateBox.value;
    li.appendChild(date);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  dateBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      saveData();
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
