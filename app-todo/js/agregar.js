// import { addData } from "./http-fetch.js";
import { addData } from "./http-axios.js";
let url=`http://localhost:3005/todoList`;
const $list_category_color=document.querySelector("#list-category-color");
const $color_category = document.querySelector(".color-category");
const $title_todo = document.querySelector(".title-todo");
const $category_name = document.querySelector(".category-name");
const $description_todo = document.querySelector(".description-todo");
const btn_save = document.querySelector("#btn-save")


$color_category.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("category color")
    $list_category_color.style.setProperty("display", "flex");
})

btn_save.addEventListener("click",(e)=>{
    e.preventDefault();
    let content={
        title:$title_todo.value,
        category: $category_name.value,
        description: $description_todo.value,
        categoryColor: $color_category.dataset.id
    }
    addData(url, content)
})
