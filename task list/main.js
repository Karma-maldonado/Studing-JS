const input = document.querySelector('.task');
const btn = document.querySelector('.btn-task');
const tasks = document.querySelector('.tasks');

function createLi(){
    const li = document.createElement('li');
    return li;
}

function clearInput(){
    input.value = '';
    input.focus();
}

function btnDelete(li){
    li.innerText += ' ';
    const btnDelete = document.createElement('button');
    btnDelete.innerText = 'Deletar';
    btnDelete.setAttribute('class', 'delete');
    li.appendChild(btnDelete);
}

function saveTask(){
    const liTask =  tasks.querySelectorAll('li');
    const taks = [];
    for(let input of liTask){
        let textTask =  input.innerText;
        textTask = textTask.replace('Deletar', '').trim();
        taks.push(textTask);
    }
    const tasksJson = JSON.stringify(taks);
    localStorage.setItem('tasks', tasksJson);
}

function requestTasks(){
    const tasks = localStorage.getItem('tasks');
    const liTasks = JSON.parse(tasks);
    for(let tarefa of liTasks){
        newTask(tarefa);
    }
}

function newTask (task){
    const li = createLi();
    li.innerHTML = task;
    tasks.appendChild(li);
    btnDelete(li);
    saveTask();
}

input.addEventListener('keypress', function(e){
    if(e.keyCode == 13){
        if(!input.value) return;
        newTask(input.value);
        clearInput();

    }
});

btn.addEventListener('click', function(e){
    if(!input.value) return;
    newTask(input.value);
    clearInput();
});

document.addEventListener('click', function(e){
    let el = e.target;

    if(el.classList.contains('delete')){
        el.parentElement.remove();
        saveTask();
    }
});

requestTasks();