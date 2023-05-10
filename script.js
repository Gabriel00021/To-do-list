const tarefa = document.getElementById("tarefa")
const aparece = document.getElementById("aparece")


function result(){
    let resultado = tarefa.value
    console.log(resultado)
    aparece.innerHTML+= '<li>' + resultado + '</li>' 
}

