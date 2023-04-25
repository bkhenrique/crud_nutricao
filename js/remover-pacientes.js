var pacientes = document.querySelectorAll(".paciente");//selecionar o paciente

//remover paciente com duplo click
//pacientes.forEach(function(paciente){
//    paciente.addEventListener("dblclick", function(){
//        console.log(" clicou2;");
//        this.remove();
//    });
//});

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
     setTimeout(function(){
       event.target.parentNode.remove();
    },500);
    //var alvoEvento= event.target;
    //var paiDoAlvo = alvoEvento.parentNode;// tr = paciente= remover-paciente
    console.log(event.target);
    

});
