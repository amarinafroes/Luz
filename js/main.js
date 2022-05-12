const lampada = document.querySelector("#imagem>img");
const ligar = document.getElementById("on");
const desligar = document.getElementById("off");
let cont = 0
const estado = {
    quebrada: false,
    ligada: false,
    queimada: false
}
 

lampada.addEventListener("dblclick", (ev) => {
    if(estado.quebrada == false){
        estado.quebrada = true;
        lampada.src = "./img/quebrada.jpg";
    }
});

ligar.addEventListener("click", (ev) => {
    if(estado.ligada == false && estado.quebrada == false ){
        cont += 1
        estado.ligada = true
        lampada.src = "./img/ligada.jpg";
    }if(estado.queimada == false && cont == 10){
        estado.queimada = true
        lampada.src = "./img/quebrada.jpg";
    }
    
});
desligar.addEventListener("click", (ev) => {
    if(estado.ligada == true && estado.quebrada == false ){
        estado.ligada = false
        lampada.src = "./img/desligada.jpg";
    }
});