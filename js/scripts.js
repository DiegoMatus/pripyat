// Scrolls to the selected menu item on the page
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


function main (){
    $('#send').on('click', function(){
        alert("Es posible que tenga que configurar un cliente de correo. También puede envíar el correo directamente desde su cliente web");
    })
}

$(document).on('ready', main);

/*$(function(){
    $('#contact').validate({
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                url: 'process.php',
                success: function() {
                    $('#contact').hide();
                    $('#contact-form').append("<p class='thanks'>Gracias! Tu mensaje ha sido enviado</p>")
                } 
            });
        }
    });
});*/