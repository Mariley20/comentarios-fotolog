/*aquí va tu código*/

$('#guardarDatos').click(() => {
    if (($("#clave").val() != "") && ($("#valor").val() != "")) {
        let nombre = $('#clave').val();
        let comentario = $('#valor').val();
        localStorage.setItem(nombre, comentario);
        $('#comentarios').append(`<div><label>${nombre}</label><br>\
			<p>${comentario}</p></div>`)
        //recoverData();
    } else {
        $("#datos").text("No has introducido tu nombre y tu comentario");
    }

});
$('#limpiarDatos').click(() => {
    localStorage.clear();
});

function recoverData() {
    if (localStorage.length >= 1) {
        //for (let i = localStorage.length - 1; i >= 0 ; i--) {
        for (var i = 0; i < localStorage.length; i++) {
            let nombre = localStorage.key(i);
            let comentario = localStorage.getItem(nombre);
            $("#comentarios").append(`<div><label>${nombre}</label><br>\
			<p>${comentario}</p></div>`);
        }
    }
}
recoverData();