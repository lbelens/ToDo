// import { deleteData, getTodo, updateData } from "./http-fetch.js";
import {getTodo, updateData, deleteData} from './http-axios.js'
const userId="4yuio09";
let url=`http://localhost:3005/todoList`;
const $form_todo = document.querySelector("#form-todo");
const $title_todo= document.querySelector(".title-todo")
const $description_todo = document.querySelector(".description-todo");
const $category_name = document.querySelector(".category-name")
const $color_category = document.querySelector(".color-category");
const $list_category_color=document.querySelector("#list-category-color");
const btnEdit = document.querySelector("#btn-update");
const btnCancel = document.querySelector(".btn-cancel");
const btnDelete = document.querySelector(".btn-delete");
const btn_close_colorCategory = document.querySelector(".btn-close");

document.addEventListener("submit", (e)=>{
    if(e.target === $form_todo){
        e.preventDefault
    }
})

document.addEventListener("DOMContentLoaded", ()=>{
    console.log("cargaa")
        const urlParams = new URLSearchParams(window.location.search)
        let id = urlParams.get("v")
        showDetails(id);
})

async function showDetails(id){
    let todo = await getTodo(`${url}/${id}`)

    console.log(todo)
    $title_todo.textContent= todo.title;
    $title_todo.id= todo.id;
    $description_todo.textContent= todo.description;
    $description_todo.style.setProperty("height", `${$description_todo.scrollHeight}px`);
    $category_name.value=todo.category;
    $color_category.dataset.id=todo.categoryColor;
    $color_category.style.setProperty("background-color", `#${todo.categoryColor}`)
}



btnEdit.addEventListener("click", (e)=>{
    e.preventDefault();
    // Se debe desabilitar los controles para que se pueda editar
    if(e.target.textContent==="Editar"){
        e.target.textContent= "Guardar";
        e.target.classList.remove("btn-edit")
        e.target.classList.add("btn-save")
        btnDelete.style.setProperty("display", "none");
        btnCancel.style.setProperty("display", "block");
        $title_todo.style.setProperty("background-color", "#e0c6ff");
        $title_todo.style.setProperty("border-bottom","1.5px solid #613e8d")
        $title_todo.removeAttribute("readonly");
        $description_todo.removeAttribute("readonly");
        $category_name.removeAttribute("readonly");

        $color_category.addEventListener("click",(e)=>{
            e.preventDefault();
            console.log("click list color")
            $list_category_color.style.setProperty("display", "flex");
        })


    }
    else{
        let urlUpdate= `${url}/${$title_todo.id}`
        console.log("Guardar")
        console.log(urlUpdate)
        let content={
            title:$title_todo.value,
            category: $category_name.value,
            description: $description_todo.value,
            categoryColor: $color_category.dataset.id
        }
        console.log(content)
        //Mandar los datos para que se actualicen
        updateData(urlUpdate,content);
    }
})

btn_close_colorCategory.addEventListener("click",(e)=>{
    e.preventDefault()
    $list_category_color.style.setProperty("display", "none");
    console.log("cerrar")
})

btnCancel.addEventListener("click", (e)=>{
    e.preventDefault()
    location.reload()
})

btnDelete.addEventListener("click",(e)=>{
    const urlDelete = `${url}/${$title_todo.id}`;
    e.preventDefault()

    deleteData(urlDelete)
})