// Se ejecutarán las siguientes acciones al hacer clic.

document.getElementById("boton_abrir").addEventListener("click", abrir_cerrar_menu);

// Se ejecutarán las siguientes acciones al hacer clic.

var menu_sidebar = document.getElementById("menu_sidebar");
var boton_abrir = document.getElementById("boton_abrir");
var cuerpo = document.getElementById("cuerpo");

// Evento para mostrar y ocultar el menú

function abrir_cerrar_menu() {
    cuerpo.classList.toggle("cuerpo_movimiento");
    menu_sidebar.classList.toggle("menu_sidebar_movimiento");
}

// Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 760){

    cuerpo.classList.add("cuerpo_movimiento");
    menu_sidebar.classList.add("menu_sidebar");
}

// Haciendo el menú responsive (adaptable)

window.addEventListener("resize", function(){

    if (window.innerWidth > 760){

        cuerpo.classList.remove("cuerpo_movimiento");
        menu_sidebar.classList.remove("menu_sidebar");
    }

    if (window.innerWidth < 760){

        cuerpo.classList.add("cuerpo_movimiento");
        menu_sidebar.classList.add("menu_sidebar");
    }

});

$(".boton_cliente").click(function(e){
    e.preventDefault();
    $("#nombre_cliente").removeAttr("disabled");
    $("#tel_cliente").removeAttr("disabled");
    $("#dir_cliente").removeAttr("disabled");
    $("#email_cliente").removeAttr("disabled");

    $("#registro_cliente").slideDown();

});