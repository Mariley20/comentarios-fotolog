/*aquí va tu código*/

$('#guardarDatos').click(() => {
	console.log('hummm')
	if (($("#clave").val() != "") && ($("#valor").val() != "")) {
		localStorage.nombre = $("#clave").val();
		localStorage.comentario = $("#valor").val();
	
		$('#comentarios').append(`<p>${localStorage.nombre}</p>\
			<p>${localStorage.comentario}</p>`)
	}
	else
	{
		document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
	}
	
});
$('#limpiarDatos').click(() => {
	localStorage.clear();
});
