const input = document.querySelector("input");
const addBtn = document.querySelector(".btnAdd");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
const ulComplete = document.querySelector(".containerDoneArea ul")

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;
    
    li.appendChild(addCompleteBtn())
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

    const items = document.querySelectorAll('li');

    if (items.length === 0) {
        empty.style.display = "block";
    }
  });
  return deleteBtn;
}


//Funcion para añadir boton de completar y al hacer click se pasa a la otra columna (en proceso)
function addCompleteBtn() {
  const completeBtn = document.createElement("button");

  completeBtn.textContent = "Done";
  completeBtn.className = "btnComplete";

  completeBtn.addEventListener("click", (event) => {
    const item = event.target.parentElement;
    ul.removeChild(item);
    const ulComplete = document.createElement("li")
    const items = document.querySelectorAll("li");
    items.textContent(item)
    
    if (items.length === 0) {
      empty.style.display = "block";
    }
  })
  return completeBtn;
}