//calculo de imc na tabela
var pacientes = document.querySelectorAll(".paciente");
for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;
    
    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;
    
    var tdimc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    if(!pesoEhValido){
        console.log("Peso invalido")
        pesoEhValido = false;
        tdimc.textContent = "Peso Inválido"
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida){
        console.log("altura invalida")
        alturaEhValida = false;
        tdimc.textContent = "Altura Inválida"
        paciente.classList.add("paciente-invalido");
        
    }
    
    if(alturaEhValida && pesoEhValido){
        var imc = calculeImc(peso,altura) ;
        console.log(imc)
        tdimc.textContent = imc;
    
    }
    
}
function validaPeso(peso){

    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura < 3.0) {
        return true;
    } else {
        return false;
    }
}


function calculeImc(peso,altura){
    var imc= 0;
    var imc = peso / (altura*altura) ;

    return imc.toFixed(2);
}