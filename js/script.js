var sitename = document.querySelector(".sitename");
sitename.textContent = "Henrique CROD";

var paciente = document.querySelector("#primeiro-paciente");

var tdpeso = paciente.querySelector(".info-peso");
var peso = tdpeso.textContent;

var tdaltura = paciente.querySelector(".info-altura");
var altura = tdaltura.textContent;

var tdimc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 1000){
    console.log("Peso invalido")
    pesoEhValido = false;
    tdimc.textContent = "Peso Inválido"
}
if(altura <= 0 || altura >= 3.00){
    console.log("altura invalida")
    alturaEhValida = false;
    tdimc.textContent = "Altura Inválida"
    
}

if(alturaEhValida && pesoEhValido){
    var imc = peso / (altura*altura) ;
    console.log(imc)
    tdimc.textContent = imc;

}