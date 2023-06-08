const input = document.querySelector("input");
const addBtn = document.querySelector(".btnAdd");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
const containerDone = document.querySelector(".containerDone h2")
const ulDone = document.querySelector(".containerDoneArea ul");
let clearBtnExists = false; 
let clearBtn = null;
let arrayLocal = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("notes")) : [];


addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const taskText = input.value;

  if (taskText !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = taskText;
    arrayLocal.push(taskText.value)
    localStorage.setItem("taskText", JSON.stringify(arrayLocal));
    li.appendChild(addCompleteBtn(li)); // Pasar el elemento <li> como argumento
    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btnDelete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);
    localStorage.removeItem("taskText");

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });
  return deleteBtn;
}

function addCompleteBtn(li) {
  const completeBtn = document.createElement("button");

  completeBtn.textContent = "Done";
  completeBtn.className = "btnComplete";

  completeBtn.addEventListener("click", (event) => {
    const item = event.target.parentElement;
    ul.removeChild(item);
    
    const pDone = li.querySelector("p").textContent;
    const liDone = document.createElement("li");
    const pDoneElement = document.createElement("p");
    pDoneElement.textContent = pDone;
    liDone.appendChild(pDoneElement);
    ulDone.appendChild(liDone);
    if (!clearBtnExists) {
      containerDone.appendChild(addClearBtn());
      clearBtnExists = true;
    }

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });
  return completeBtn;
}


function addClearBtn() {
  const clearBtn = document.createElement("button");

  clearBtn.textContent = "Clear";
  clearBtn.className = "clearBtn";

  clearBtn.addEventListener("click", (evento) => {
    const doneList = document.querySelector(".containerDoneArea ul li")

    while (ulDone.firstChild) {
      ulDone.removeChild(ulDone.firstChild);
    }

    containerDone.removeChild(clearBtn)
    clearBtnExists = false;

  })
  return clearBtn
}