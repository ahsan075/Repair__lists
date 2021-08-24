const inputBox = document.querySelector(".new-repair");

const pushBox = document.querySelector(".repair-list");

const listItem = document.querySelectorAll(".list-item");

const clearComplete = document.querySelector(".clear-completed");

let repairs = [];

const defaultBhv = function () {
  inputBox.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
      e.preventDefault();
    }
  });
};
defaultBhv();

const collectValues = function () {
  inputBox.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
      // console.log(event.target.value);
      render(repairs.length, event.target.value, false);
      inputBox.value = "";
    }
  });
};
collectValues();

const insert = function (id, description) {
  this.id = id;
  this.description = description;
  this.complete = false;

  pushBox.insertAdjacentHTML(
    "afterbegin",
    `<li data-id="${this.id}" class="list-item">
   <div class="view">
     <input class="toggle" type="checkbox" />
     <label>${this.description}</label>
     <button class="destroy"></button>
   </div>
 </li>`
  );
};

const render = function (description, complete, id) {
  let newList = new insert(description, complete);
  repairs.push(newList);

  const toggle = document.querySelector(".toggle");
  const listItem = document.querySelector(".list-item");
  const button = document.querySelector(".destroy");

  toggle.addEventListener("change", function (e) {
    const checking = e.target.checked;
    if (checking == true) {
      listItem.classList.add("completed");
    } else {
      listItem.classList.remove("completed");
    }
  });

  button.addEventListener("click", function (e) {
    const deleteList = e.target.parentElement.parentElement;
    deleteList.remove(id);
    repairs.splice(id, 1);
  });

  clearComplete.addEventListener("click", function () {
    if (listItem.classList.contains("completed") == true) {
      listItem.remove();
    }
  });
};
