
//Executa a partir do momento que o documento está carregado
$(document).ready(function(){

    alert('DOM CARREGADO');


});

//Executa a partir do momento que os elementos do documento estão sendo carregados
$(window).on('load', function () {
alert("Elementos Carregados");
});