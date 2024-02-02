document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    newTaskList(e.target.new_task_description.value)
    form.reset()
  })
  
});

function newTaskList(task) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteTask)
  btn.textContent = 'Delete'
  p.textContent = `${task} `
  p.appendChild(btn)
  document.getElementById('tasks').appendChild(p)
  
}

function deleteTask(e) {
  e.target.parentNode.remove()
}


