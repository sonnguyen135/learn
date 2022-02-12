import html from "../core.js"


function TodoItem(todo,index){
   
    return html`
        <li class="${todo.completed && 'completed'}">
            <div class="view">
                <input 
                class="toggle" 
                type="checkbox" 
                onchange = "dispatch('toggle',${index})"
                ${todo.completed && 'checked'}
                >
                <label ondblclick="this.parentElement.parentElement.classList.add('editing')">${todo.title}</label>
                <button class="destroy" onclick="dispatch('destroy',${index})"></button>
            </div>
            <input class="edit" value="${todo.title}" 
            onkeyup="event.keyCode == 13 && dispatch('save',${index},this.value.trim()) || event.keyCode === 27 && dispatch('cancelEdit')"
             onblur="dispatch('save',${index},this.value.trim())" autofocus>
        </li>
    `;
}

export default TodoItem