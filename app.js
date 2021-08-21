const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

todoButton.addEventListener('click',addTodo)
todoList.addEventListener('click',deleteCheck)


function addTodo(event) {
    event.preventDefault()

    // Todo box
    const todoDiv = document.createElement('div')
    todoInput.style = ''
    todoDiv.classList.add('todo')

    // Creaate LI
    const newTodo = document.createElement('li')
    if(todoInput.value.trim()) {
        newTodo.innerText = todoInput.value.trim()
        newTodo.classList.add('todo-item')
        todoDiv.appendChild(newTodo)
        
        //Create Check Button
        const completeButton = document.createElement('button')
        completeButton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
        completeButton.classList.add('complete-btn')
        todoDiv.appendChild(completeButton)
    
        const trashButton = document.createElement('button')
        trashButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'
        trashButton.classList.add('trash-btn')
        todoDiv.appendChild(trashButton)
    
        // Append todo-list
        todoList.appendChild(todoDiv)
        todoInput.value = ''
    }
    else todoInput.style = 'border: 2px solid #ff6f47' 
}

function deleteCheck(event) {
    const item = event.target
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement
        todo.classList.add('fall')
       todo.addEventListener('transitionend', function(){
           todo.remove()
       })
    }

    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}