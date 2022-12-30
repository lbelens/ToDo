import { sliceString } from "./functionString.js";
import {getTodo, deleteData} from "./http-axios.js";
let url=`http://localhost:3005/todoList`;
const $list_todo = document.querySelector(".list-todo");
let $title_todo_home;
const $fragment = document.createDocumentFragment();
const $template= document.querySelector("#list-todo-template").content;
let btnDelete;
let btnAdd = document.querySelector(".btn-add");

document.addEventListener("DOMContentLoaded",async ()=>{
    sessionStorage.clear()
    if(await showTodo()){
         $title_todo_home = document.querySelectorAll(".title-todo");
         $title_todo_home.forEach(element => {
             element.addEventListener("click", seeDetails)
         });

         btnDelete = document.querySelectorAll(".btn-delete");
         btnDelete.forEach(element=>{
            element.addEventListener("click", deleteTodo)
         })
    }
   
    
})

//se hace la llamada al servidor para obtener las listas de tareas
async function showTodo(){
    let responseOk=false;
    let todo = await getTodo(url);

    if(todo.length>0){
        console.log(todo)
        responseOk=true;
        todo.map((element)=>{
            console.log(element)
            localStorage.setItem(element.id, JSON.stringify(element));

            $template.querySelector(".title-todo").textContent=element.title;
            $template.querySelector(".title-todo").id=element.id;

            $template.querySelector(".descripcion-todo").textContent=sliceString(element.description);

            $template.querySelector(".category-name").value= element.category;
            $template.querySelector(".category-name").setAttribute("readonly","true");
            
            $template.querySelector(".color-category").style.setProperty("background-color",`#${element.categoryColor}`)

            $template.querySelector(".btn-delete").dataset.id=element.id;

            let $cloneElement = document.importNode($template,true);
            $fragment.appendChild($cloneElement);
        })

        $list_todo.appendChild($fragment);
    }
    else{
        console.log("no")
        $list_todo.insertAdjacentHTML("beforebegin",`<p class="message-empty-task">No tienes ninguna tarea creada todavía</p>`)
    }

    return responseOk;
}


function seeDetails(e){
    window.location.assign(`todo.html?v=${e.target.id}`);
}

function deleteTodo(e){
    let urlDelete= `${url}/${e.target.dataset.id}`;
    e.preventDefault()
    deleteData(urlDelete);
}

btnAdd.addEventListener("click", (e)=>{
    e.preventDefault()
    window.location.assign("agregar.html");
    console.log("crear")
})