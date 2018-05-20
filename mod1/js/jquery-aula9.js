
//Executa a partir do momento que o documento está carregado
$(function(){
 
  /*Dicas de Jquery
    1 - Ao utilizar o simbolo #, você seleciona pelo id
    2 - ao utilizar o simbolo .  refere-se a classe

  */
    var ex = $('.ex1');

    $('.ev1').click(function(){

      ex.hide('slow');

    });

    $('.ev2').click(function(){

      ex.show('slow');

    });

    $('.ev3').click(function(){

      ex.toggle('slow');

    });

    $('.ev4').keyup(function(){

      var texto = $(this).val();

      if(texto == 'hide'){

        ex.hide('slow');
      }

      if(texto == 'show'){

        ex.show('show');
      }

      
      if(texto == 'toggle'){

        ex.toggle('slow');
      }

    });




});
