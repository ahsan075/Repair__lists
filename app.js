const defaultBhv = function () {
    inputBox.addEventListener("keypress", function (e) {
        if (e.key == "Enter") {
            e.preventDefault();
        }
    });
};
defaultBhv();

const list = new RepairList();

// Add

inputBox.addEventListener("keypress", function (e) {
    if (e.key == "Enter" && inputBox.value.trim()) {
        const inputBoxEl = e.target.value;
        list.addRepair(inputBoxEl);
        // console.log(list.repairs);
        e.target.value = "";
        reset();
    }
});

// Delete

pushBox.addEventListener("click", function (e) {
    if (e.target.nodeName === "BUTTON") {
        const dltEle = e.target.closest("li");
        list.deleteRepair(dltEle.dataset.id);
        reset();
    }
});

// Reseting After adding and deleting

const reset = function () {
    const items = document.querySelectorAll(".lists");

    for (const item of items) {
        item.remove();
    }

    for (let [index, item] of list.repairs.entries()) {
        addItems(index, item);
    }
};

// Checked

const checking = function () {
    const pushInputs = document.querySelector(".toggle");
    pushInputs.addEventListener("change", function (e) {
        const chk = e.target.checked;

        const inputEle = e.target.closest("li");

        if (chk) {
            list.markAsComplete(inputEle.dataset.id);
            console.log(inputEle.dataset.id);
            inputEle.classList.add("completed");
        } else {
            inputEle.classList.remove("completed");
        }

        // if (list.repairs[inputEle.dataset.id].completed === true) {
        //   inputEle.classList.add("completed");
        // } else {
        //   inputEle.classList.remove("completed");
        // }
    });
};

// Clear Completed

const clearBtn = document.querySelector(".clear-completed");
clearBtn.addEventListener("click", function () {
    // list.repairs = list.repairs.filter((check) => !check.completed);
    list.clearCompleted();
    reset();
});
