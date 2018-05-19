
//Executa a partir do momento que o documento está carregado
$(function(){
 
  $('.place').each(function(){
    var place = $(this).attr('title');
    var input = $(this);

    input
        .val(place)
        .css('color', '#ccc')
        .focusin(function(){
            input.css('color', '#000');
            //Se o valor que está na caixa de texto for igual ao valor do titulo
            if(input.val()==place){
                input.val('');

            }

        }).focusout(function(){
          if(input.val()==''){
            input.css('color', '#ccc');
            input.val(place);

          }

        });

        var ex = $('.ex1');
        $('.key').keypress(function(){
            ex.text($(this).val());

        });

  });



});
