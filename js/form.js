

//adicionar paciente na tabela
var botaoAdicionar = document.querySelector("#adicionar-paciente") ;
botaoAdicionar.addEventListener("click" ,function(event){
    event.preventDefault();




    var form = document.querySelector("#form-adiciona");
//  extraindo informações do paciente
  var paciente = obtemPacenteDoFormulario(form);

  var pacienteTr = montaTr(paciente);
  if(!validaPaciente(paciente)){
    console.log("deu ruin")

    return; 
  }
  if(!validaAltura(paciente)){
    console.log("deu ruin")

    return;
  }
   
  var tabela = document.querySelector("#tabela-pacientes");
    
  tabela.appendChild(pacienteTr)
  
  //limpar campos do form
  form.reset();

});

function obtemPacenteDoFormulario(form){

    var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculeImc(form.peso.value, form.altura.value)
    }
return paciente;
}
 // cria tr a td do paciente
function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
   
    return pacienteTr;
}
function montaTd(dado,classe){
    var td= document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

// validar paciente
function validaPaciente(paciente){
    if(validaPeso(paciente.peso)){
        return true;
    }else{
        return  "Altura é inválida";
    }
}
function validaAltura(altura) {

    if (validaAltura(paciente.altura)) {
        return true;
    } else {
        return "O Peso é inválido";
    }
}