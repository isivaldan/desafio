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
