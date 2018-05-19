
//Executa a partir do momento que o documento está carregado
$(function(){
   
var ex = $('.ex1');

//Evento de click
 $('.ev1').click(function(){
    $(this).css("background", "gray");
    ex.text("Você clicou!");
  });

//Evento de 2 clicks
$('.ev2').dblclick(function(){
  $(this).css("background", "gray");
  ex.text("Você clicou 2 vezes!");
});

  //Evento de foco
$('.ev3').focusin(function(){
  $(this).css("background", "gray");
  ex.text("Você deu foco!");
}).focusout(function(){ //Evento de retirar o foco
  
  $(this).css("background", "black");
  ex.text("Você retirou o foco!");

});

$('.ev4').hover(function(){
  $(this).css("background", "gray");
  ex.text("Você passou o mouse!");
});


$('.ev5').mousedown(function(){
  $(this).css("background", "gray");
  ex.text("Você segurou o botão do mouse!");
}).mouseup(function(){
  ex.text("Você soltou o botão do mouse!");
});

//Eventos de entrada de mouse
var a =0;
  $('.ev6').mouseenter(function(){
    a +=1;
    ex.text('Entradas do mouse'+a);
  }).mouseout(function(){
    
    ex.text('Saída do mouse'+a);

  });

  
$('.ev8').mousemove(function(move){
  var localx = move.pageX;
  var localy = move.pageY;

  ex.text("Movimento X: "+localx+
  ' Movimento Y'+localy);
});


});
