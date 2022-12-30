const $list_todo = document.querySelector(".list-todo");

// get -> obtener
// put -> update
// delete -> delete
// post -> agregar

export async function getTodo(url){
  let todo;
  try {
    let response = await axios.get(url);
    todo = await response.data;
    // si llega haber un error en la petición axios automaticamente te manda al catch
  } catch (error) {
        let message = error.statusText || "No están disponibles la lista de tareas, porfavor intenta más tarde";
        console.log(message)
        $list_todo.insertAdjacentHTML("beforebegin", `<p class="message-error"><b>${message}</b></p>`)
  }

  return todo;
}

export async function updateData(url, content){

  let options={
    method: "PUT",
    data: content
  }

  try {
    let response= await axios(url,options);
    let data = await response.data;
    
    location.reload();
  } catch (error) {
    console.log(error)
  }
}

export async function deleteData(url){
    let options={
        method:"delete"
    }

    try {
        let response= await axios(url,options);
        let data = await response.data;
        console.log(data)

        window.location.assign("home.html");
    } catch (error) {
        console.log(error)
    }
}

export async function addData(url, content){
    let options={
        method:"post",
        data: content
    }

    try {
        let response = await axios(url, options);
        let data = await response.data;
        window.location.assign("home.html");

    } catch (error) {
        console.log(error)
    }
}
