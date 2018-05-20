
//Executa a partir do momento que o documento está carregado
$(function(){
 
  /*Dicas de Jquery
    1 - Ao utilizar o simbolo #, você seleciona pelo id
    2 - ao utilizar o simbolo .  refere-se a classe

  */
    var ex = $('.ex1');

    var button = $(':button');
/*
    button.click(function(){
      
      ex.fadeOut('slow');

    }).dblclick(function(){
      
      ex.fadeIn('slow');

    });
*/
    /*button.click(function(){
      ex.fadeTo('slow', 0.5);

    });

    */
   button.click(function(){
    ex.fadeTo('slow', 0.8);
    ex.fadeTo('slow', 0.8);
  });

});
