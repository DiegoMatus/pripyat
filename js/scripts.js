function main(){

    $('.carousel').carousel();

    // Scrolls to the selected menu item on the page
    $('a[href*=#]:not([href=#],[href=#carousel-example-generic])').click(function() {
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


    $('#contact-form').on('submit', function(e){
        swal({
          title: "Gracias por tu correo!",
          text: "Te responderemos en breve.",
          timer: 2500,
          showConfirmButton: false
        });
    });

    $('#contact-form2').on('submit', function(e){
        swal({
          title: "Gracias por tu correo!",
          text: "Te responderemos en breve.",
          timer: 2500,
          showConfirmButton: false
        });
    });

}

$(document).on('ready', main);
