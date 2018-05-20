
//Executa a partir do momento que o documento está carregado
$(function(){
 
  /*Dicas de Jquery
    1 - Ao utilizar o simbolo #, você seleciona pelo id
    2 - ao utilizar o simbolo .  refere-se a classe

  */


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

        $('.ev1').focus(function(){

          ex.text($(this).attr('title'));

        });

        $('.ev1').blur(function(){

          ex.text('Saída do campo: '+$(this).attr('name'));

        });

        $('.selecionar').click(function(){
            $('$.ev3').select();
            $('form').submit(function(){
                return false;

            });

        });

        $('input').change(function() {
          var filter = $(this).val();
          $('option').each(function() {
            if ($(this).val() == filter) {
              $(this).show();
            } else {
              $(this).hide();
            }
            $('select').val(filter);
          })
        });



        $('#selectCarro').focus(function(){           

          var filtro1 = 'volvo';
          var filtro2 = 'mercedes';

          $('option').each(function(){
            if(($(this)).val() == filtro1 || $(this).val() == filtro2){
              $(this).show();
            }else{
              $(this).hide();
            }
            $('selectCarro').val(filtro1);
          });
          
        }); 
        
  });



});
