var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente){
    paciente.addEventListener("dbclick", function(){
        console.log(" clicou2;");
    });
});