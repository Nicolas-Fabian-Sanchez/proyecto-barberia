let menuhamburguesa = document.querySelector(".hamburguer");
let listaDesplegable = document.querySelector("ul");

menuhamburguesa.addEventListener("click",()=>{
    console.log("me hicieorn click")
    listaDesplegable.classList.toggle("mostrar");
})