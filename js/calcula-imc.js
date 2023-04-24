//calculo de imc na tabela
var pacientes = document.querySelectorAll(".paciente");
for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

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
        paciente.classList.add("paciente-invalido");

    if(altura <= 0 || altura >= 3.00){
        console.log("altura invalida")
        alturaEhValida = false;
        tdimc.textContent = "Altura Inválida"
        paciente.classList.add("paciente-invalido");
        
    }
    
    if(alturaEhValida && pesoEhValido){
        var imc = peso / (altura*altura) ;
        console.log(imc)
        tdimc.textContent = imc.toFixed(2);
    
    }
}
}