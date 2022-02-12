import storage  from "./storage.js"

const init = {
    todos: storage.get(),
    filter: 'all',
    filters :{
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed,
    }
}

const actions = {
    add({todos},title){
        title.trim() && todos.push({title,completed:false})
        storage.set(todos)
    },
    toggle({todos},index){
        const todo = todos[index];
        todo.completed = !todo.completed;
        storage.set(todos)
    },
    toggleAll({todos},check){
        todos.map((todo)=> todo.completed = check)
        storage.set(todos)
    },
    destroy({todos},index){
        todos.splice(index)
        storage.set(todos)
    },
    filter(state,filterValue){
        state.filter = filterValue
    },
    clearCompleted(state){
        state.todos= state.todos.filter(init.filters.active);
        storage.set(state.todos)
    },
    save(state,index,value){
        if (value !==""){
            state.todos[index].title = value;
        }else{
            state.todos.splice(index)
        }
        storage.set(state.todos)
    },
    cancelEdit(){}

}

export default function reducer(state = init, action, args){
    actions[action] && actions[action](state,...args)
    return state;
} 