// admin slide

if(window.jQuery) {
    $(document).ready(function(){ 
        $('.show-menu').click(function(){
            $('.admin-info').slideToggle('slow');
        });
    });
}

// orders

if(window.jQuery) {
    $(document).ready(function(){
        $('#order-details').click(function(){
            $('.content h1').text('order details');
            $('.data-details').fadeOut(200);
            $('.order-details').show(1000);
        });

        $('#back-to').click(function(){
            $('.content h1').text('orders');
            $('.order-details').fadeOut(200);
            $('.data-details').fadeIn(1000);
        });
    });
}

// pages transitions

if(window.jQuery) {
    $(document).ready(function(){
        $('#show-form').click(function(){
            $('.data-details, #show-form').fadeOut(200);
            $('#show-details').show(1000);
        });

        $('#back-to-data').click(function(){
            $('#show-details').fadeOut(200);
            $('.data-details , #show-form').fadeIn(1000);
        });
    });
}

// msg



// tips

if(window.jQuery) {
    $(document).ready(function(){
        $('.tips').mouseover(function(){
            $(this).next().fadeIn(300);
        });

        $('.tips').mouseout(function(){
            $('.tip').fadeOut(600);
        });

        
    });
}