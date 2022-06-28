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
const clickOverlay = document.querySelectorAll('.add-todos');
const closeOverlay = document.querySelector('.close-container')


console.log(clickOverlay);

clickOverlay.forEach((clicks) => {
    clicks.addEventListener('click', () => {
        console.log('hi');
        if(showOverlay.style.display == "none"){
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
    document.getElementById('todo_input').value = '';
    document.getElementById('todo_input1').value = '';
    document.getElementById('todo_input2').value = '';
}
)




// for create boards overlay
const showboardsOverlay = document.querySelector('.create-board-overlay');
const clickboardsOverlay = document.querySelectorAll('.create-board');
const closeboardsOverlay = document.querySelector('.close-boards-container')


console.log(clickboardsOverlay);

clickboardsOverlay.forEach((clickss) => {
    clickss.addEventListener('click', () => {
        console.log('hi');
        if(showboardsOverlay.style.display == "none"){
            showboardsOverlay.style.display = "block";
        }
        else{
            showboardsOverlay.style.display = "none";
        }
    })
})

closeboardsOverlay.addEventListener('click', () => {
    console.log('bye');
    showboardsOverlay.style.display = "none";
    document.getElementById('board_input').value = '';
}
)


