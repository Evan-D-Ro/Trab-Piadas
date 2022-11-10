var btn = document.querySelector('#show');
var container = document.querySelector('.container');
var child = document.querySelector('.child');
btn.addEventListener('click', function(){
    console.log(container.style.display)
    if(container.style.display !== 'flex')
    {
        container.style.display = 'flex';
        child.classList.remove("hide")
        child.classList.add("show");
    }
});

var btn1 = document.querySelector('#hide');
btn1.addEventListener('click', function(){
    if(container.style.display === 'flex')
    {
        child.classList.remove("show")
        child.classList.add("hide");
        setTimeout(() => {
            container.style.display = 'none';
          }, "1000")

    }
});

class Piada{

}

class Categoria
{

}
var ListaPiada = []

let div = document.createElement("div")
let li = document.createElement()