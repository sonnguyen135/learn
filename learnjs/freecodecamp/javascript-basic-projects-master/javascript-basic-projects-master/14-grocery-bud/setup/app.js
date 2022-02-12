/************** BASE ***************/
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/************** GET ITEMS *************/
const input = $('#grocery');
const submit = $('.submit-btn');
const groceryList = $('.grocery-list');
const alert  = $('.alert');
var editElement = null;
const container = $('.grocery-container');
const clear = $('.clear-btn');
const STORAGE_KEYS = 'GROCERY_BUD';
let list = JSON.parse(localStorage.getItem(STORAGE_KEYS)) || {};
var editId = null;

/************** HTML RENDER *************/
function html(value){
    return  `
        <p class="title">${value}</p>
        <div class="btn-container">
        <!-- edit btn -->
        <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
        </button>
        <!-- delete btn -->
        <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
        </button>
        </div>`;
}

/************** DISPLAY ALERT *************/
function displayAlert(text, status){
    alert.textContent = text;
    alert.classList.add('alert-'+status);
    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove('alert-'+status);
    },1000);
}
/************** HANDLE EVENT *************/
submit.onclick = function(e){
    e.preventDefault();

    if (input.value == ""){
        displayAlert("please enter value", "danger");
        return;
    }

    if (editElement)
        editItem();
    else
        addItem(e);
};
groceryList.onclick = function(e){
    if (e.target.classList.contains('fa-edit'))
        getEdit(e.target.parentElement.parentElement.parentElement);
    else if (e.target.classList.contains('fa-trash'))
        deleteItem(e.target.parentElement.parentElement.parentElement);
}

clear.onclick = function(){
    clearItem();
}

window.addEventListener('DOMContentLoaded',function(){
    if (Object.keys(list).length > 0){
        for (const [id, value] of Object.entries(list)) {
            let article = createItem(id,value);
            groceryList.appendChild(article);
        }
        container.classList.add('show-container');
    }
});

/************** CREATE ITEM *************/
function createItem(id, value){
    let article = document.createElement("article");
    article.classList.add('grocery-item');
    article.dataset.id = id;
    article.innerHTML = html(value);
    return article;
}

/************** ADD ITEM *************/
function addItem(e){
    let id = new Date().getTime().toString();
    let article = createItem(id,input.value);
    if (!container.classList.contains('show-container'))
        container.classList.add('show-container');
    groceryList.appendChild(article);
    list[id] = input.value;
    input.value = '';
    displayAlert("item added to the list", "success");
    localStorage.setItem(STORAGE_KEYS,JSON.stringify(list));
}

/************** GET EDIT *************/
function getEdit(e){
    input.value = e.querySelector('.title').textContent;
    editElement = e;
    editId = e.dataset.id;
    submit.textContent = 'Edit';
}

/************** EDIT ITEM *************/
function editItem(){
    editElement.querySelector('.title').textContent = input.value;
    editElement = null;
    list[editId] = input.value;
    input.value = '';
    submit.textContent = 'Submit';
    localStorage.setItem(STORAGE_KEYS,JSON.stringify(list));
}

/************** DELETE ITEM *************/
function deleteItem(e){
    delete list[e.dataset.id];
    e.remove();
    displayAlert("item removed", "danger");
    if (!groceryList.querySelector('article'))
        container.classList.remove('show-container');
    localStorage.setItem(STORAGE_KEYS,JSON.stringify(list));
}

/************** CLEAR ITEM *************/
function clearItem(){
    groceryList.innerHTML = '';
    list = {};
    localStorage.setItem(STORAGE_KEYS,JSON.stringify(list));
    container.classList.remove('show-container');
    displayAlert("Empty list", "danger");
}

