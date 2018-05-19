
//Executa a partir do momento que o documento está carregado
$(document).ready(function(){
    /*
    $('h1').css("color", "#f66");
    $('h1').hide();
    $('h1').delay('1000');
    //Aplicando efeitos de animação
    $('h1').fadeIn("blind");

    $('h1').text('Curso Jquery')
    */

    //$('h1').css("color", "#f66").hide().delay('1000').fadeIn('slow');

    //Encadeamento em bloco
/*
    $('h1')
        .css("color", "#f66")
        .hide()
        .delay('1000')
        .fadeIn('slow')
        .text('Curso Jquery')
        .click(function(){
            $('body').css("background", "blue")
            $('h1').css("color", "white")
        });
    */

    $('a')
    .css({color: 'red', display: 'block'});

    //Pega a referência pela classe
    $('.link2')
    .css({color: 'blue', display: 'block'});

    //Pega a referência pelo ID
    $('#link3')
    .css({color: 'gray', display: 'block'});

    //Utilizado para selecionar todos os elementos
   /* $('*')
    .css({"padding-left": '100px',
          "padding-top": '50px'});*/
    
    //Utilizado para selecionar vários elementos
    $('h1, #link3').css("border-bottom", "solid 3px blue");

});
