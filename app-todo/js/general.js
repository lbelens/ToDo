
const $description_todo = document.querySelector(".description-todo");
const $color_category = document.querySelector(".color-category");
const $fragment = document.createDocumentFragment();
const btn_close_colorCategory = document.querySelector(".btn-close");
const btn_color_category_list=document.querySelectorAll(".color-category-list");
const $list_category_color=document.querySelector("#list-category-color");

window.addEventListener("DOMContentLoaded", ()=>{
    $description_todo.style.setProperty("height", `${$description_todo.scrollHeight}px`);
    btn_color_category_list.forEach((element)=>{
        element.addEventListener("click",selectCategoryColor)
    })
})


$description_todo.addEventListener("keypress",(e)=>{
    if(e.keyCode==13){
        $description_todo.style.setProperty("height", `${$description_todo.scrollHeight}px`);
    }
    $description_todo.style.setProperty("height", `${$description_todo.scrollHeight}px`);
})



btn_close_colorCategory.addEventListener("click",(e)=>{
    e.preventDefault()
    $list_category_color.style.setProperty("display", "none");
    console.log("cerrar")
})



function selectCategoryColor(e){
    e.preventDefault()
    console.log(e.target.id)
    $color_category.dataset.id=e.target.id;
    $color_category.style.setProperty("background-color",`#${e.target.id}`)
}

