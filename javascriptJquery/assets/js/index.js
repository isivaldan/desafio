/*
var parrafo = document.getElementById('descripcion');
var texto = document.createTextNode('Esta es mi primera pagina dinamica usando js');
parrafo.appendChild(texto);

var titulo = document.getElementsByTagName('h1')[0];
var textoTitulo= document.createTextNode('mi primera pag con js');
titulo.appendChild(textoTitulo);

var divimagen = document.getElementsByName('imagen')[0];
var imagen = document.createElement('img');
imagen.src ='assets/img/imagenJS.jpg';
imagen.style = 'display:none;'
divimagen.appendChild(imagen);

function ver(){
    imagen.style = 'display:block;';
}

function ocultar(){
    imagen.style = 'display:none;';
}
*/
var parrafo = $('#descripcion').html('Esta es mi primera pagina dinamica usando js');
parrafo.hide();
parrafo.fadeIn(900);
var titulo = $('h1:eq(0)').html('mi primera pag con js');
titulo.hide();
titulo.fadeIn(800);
var fotoIsi= $('[name=imagen]:eq(0)').html('<img src="assets/img/imagenJS.jpg">');

function imagen(){
    if (this.fotoIsi!==""){
    $('[name=imagen]:eq(0)').fadeToggle();
    
    $('button').html('Mostrar');
}
else{
    $('[name=imagen]:eq(0)').fadeToggle();
    
    $('button').html('Ocultar');
}
}




$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })