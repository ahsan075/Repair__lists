const inputBox = document.querySelector(".new-repair");
const pushBox = document.querySelector(".repair-list");

class RepairList {
  constructor() {
    this.repairs = [];
  }

  get length() {
    return this.repairs.length;
  }

  addRepair(description) {
    const allRepairs = new Repair(description, false);
    this.repairs.unshift(allRepairs);
  }

  deleteRepair(id) {
    this.repairs.splice(id, 1);
  }

  markAsComplete(id) {
    const repair = this.repairs[id];
    repair.completed = true;
  }

  clearCompleted() {
    this.repairs = this.repairs.filter((check) => !check.completed);
  }
}

const addItems = function (id, label) {
  pushBox.insertAdjacentHTML(
    "afterbegin",
    `<li data-id="${id}" class="lists">
              <div class="view">
                <input class="toggle" type="checkbox"/>
                <label>${label.description}</label>
                <button class="destroy"></button>
              </div>
            </li>`
  );
  checking();
};
