$(function(){
    'use strict';
    $('input').on('keypress', function(event){
        if(event.which===13){
            var todoText = $(this).val();
            $(this).val("")
            // $('ul').append('<li>' + todoText + '<i class="fa fa-trash" aria-hidden="true"></i>')
            $('ul').append(`<li> ${todoText}<i class="fa fa-trash" aria-hidden="true"></i>`)
        }
        
        console.log(event);
    });
    $('ul').on('click','i', function(){
        $(this).parent().fadeOut(500, function(){
            $(this).remove()
        });
        // event.stopPropagation();
    })
})