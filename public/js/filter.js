
$('.btn-filter').on('click', function(){

    var cat = $(this).attr('data-cad')
    if(cat == 'todos'){
        $('.filter .roupas').show()
    }
    
    else{
        $('.filter .brinquedos').each(function(){
            if(!$(this).hasClass(cat)){
                $(this).hide()
            }else{
                $(this).show()
            }
        })
    }
})

$('.btn-filter').on('click', function(){

    var cat = $(this).attr('data-cad')
    if(cat == 'todos'){
        $('.filter .briquedos').show()
    }
    
    else{
        $('.filter .roupas').each(function(){
            if(!$(this).hasClass(cat)){
                $(this).hide()
            }else{
                $(this).show()
            }
        })
    }
})

$('.btn-filter').on('click', function(){

    var cat = $(this).attr('data-cad')
    if(cat == 'todos'){
        $('.filter div').show()
    }
    
})