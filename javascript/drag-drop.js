const todos = document.querySelectorAll(".backlog-content");
const all_tasks = document.querySelectorAll(".tasks");
let draggableTodo =  null;

todos.forEach(todo => {
    todo.addEventListener('dragstart', dragStart);
    todo.addEventListener('dragend', dragEnd);
})


function dragStart(){
    draggableTodo = this;
    console.log('dragStart');
}

function dragEnd(){
    draggableTodo = null;
    console.log('dragend');
}

all_tasks.forEach(task => {
    task.addEventListener("dragover", dragOver);
    task.addEventListener("dragenter", dragEnter);
    task.addEventListener("dragleave", dragLeave);
    task.addEventListener("drop", dragDrop);
})

function dragOver(e) {
    e.preventDefault();
    // console.log("dragOver");
}

function dragEnter() {
    console.log("dragEnter");
}

function dragLeave() {
    console.log("dragLeave");
}

function dragDrop() {
    this.appendChild(draggableTodo);
    console.log("dropped");
}


// for overlay
const showOverlay = document.querySelector('.overlay');
const clickOverlay = document.querySelectorAll('.add');
const closeOverlay = document.querySelector('.close-container')

clickOverlay.forEach((click) => {
    click.addEventListener('click', () => {
        console.log("hi");
        if( showOverlay.style.display = "none"){
            showOverlay.style.display = "block";
        }
        else{
            showOverlay.style.display = "none";
        } 
    })
    
})


closeOverlay.addEventListener('click', () => {
    console.log('bye');
    showOverlay.style.display = "none";
}
)


/* create todo  */
const todo_submit = document.getElementById("todo_submit");

todo_submit.addEventListener("click", createTodo);

function createTodo() {
  const todo_div = document.createElement("div");
  const input_val = document.getElementById("todo_input").value;
  const txt = document.createTextNode(input_val);

  todo_div.appendChild(txt);
  todo_div.classList.add("todo");
  todo_div.setAttribute("draggable", "true");

  /* create span */
  const span = document.createElement("span");
  const span_txt = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(span_txt);

  todo_div.appendChild(span);

  no_status.appendChild(todo_div);

  span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
  });
  //   console.log(todo_div);

  todo_div.addEventListener("dragstart", dragStart);
  todo_div.addEventListener("dragend", dragEnd);

  document.getElementById("todo_input").value = "";
  todo_form.classList.remove("active");
  overlay.classList.remove("active");
}

const close_btns = document.querySelectorAll(".close");

close_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});