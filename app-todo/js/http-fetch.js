// Petición get

const $list_todo = document.querySelector(".list-todo");

export async function getTodo(url){
    console.log(url)
    let todo;
    try {
        console.log("try")
          await fetch(url).then(async (response)=>{
           let data= await response.json();
            if(!response.ok){
                throw {status: response.status, statusText: "No se pudieron mostrar la lista de tareas, porfavor intente más tarde"};
            }
            todo= data;
        });

    } catch (error) {
        let message = error.statusText || "No están disponibles la lista de tareas, porfavor intenta más tarde";
        console.log(message)
       $list_todo.insertAdjacentHTML("beforebegin", `<p class="message-error"><b>${message}</b></p>`)
    }

    return todo;
}

export async function updateData(url, content){
    //header va en este caso el contenido que voy a mandar al servidor, que será un archivo json
    //en el body va la informacion que voy a mandar

    let options ={
        method:"PUT",
        headers:{
            "Content-Type":"application/json; charset=utf-8"
        },
        body: JSON.stringify(content)
    }

    let response = await fetch(url, options);
    let result = await response.json();

    location.reload();

    console.log(result)
}

export async function deleteData(url){
    let options={
        method: "DELETE",
        headers:{
            "Content-Type":"application/json; charset=utf-8"
        }
    }

    let response = await fetch(url, options);
    let result = await response.json();

    console.log(result);

    window.location.assign("home.html");
}

export async function addData(url,content){
    let options={
        method:"POST",
        headers:{
            "Content-Type": "application/json; charset=utf-8"
        },
        body:JSON.stringify(content)
    }

    let response = await fetch(url, options);
    let result = await response.json();

    console.log(result);
}