
//Executa a partir do momento que o documento está carregado
$(document).ready(function(){
   
    $('h2').css('margin', '0');
    $('p').css({'margin': '0', 'color': 'blue'});
    $('.div1').css({'margin-bottom' : '20px', background : '#ccc'});

    //Filhas
    $('.div1 span').hide().delay('1000').fadeIn(1000).css({'color': 'green', 'font-size': '15px'});

    $('.div1 h2').hide().css({'color': 'red'});

    //Hierarquia de elementos
    $('.div1 > span').css({'color': 'red'});

    //Primeiro Elemento após selecionado
    /*
      Seleciona o próximo elemento p após a seleção da classe p1  
    */

    //$('.p1').css({'font-size': '30px'});
    //Seleciona o próximo p após a classe p1
    $('.p1 + p').css({'font-size': '30px'});
    
    //Seleciona todos os parágrafor após a classe p1
    $('.p1 ~ p').css({'color': 'green'});
});
