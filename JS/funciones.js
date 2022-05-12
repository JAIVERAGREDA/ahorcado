jQuery(document).ready(listo);

function listo() {
  jQuery(".hamb").click(function (e) {
    e.preventDefault();
    jQuery("header .container nav").toggleClass("open"); //si tiene la clase open la va a quitar y si no la tiene se la pone

    jQuery(".hamb i").toggleClass("fa-times");
  });

  
}
