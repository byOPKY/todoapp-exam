window.addEventListener("load", loading);

var textArea = document.getElementById("textArea");
var lista =  document.getElementById("listaTareas");
var contador= 1;

function loading(){
	textArea.addEventListener("keyup", imprimir);

}

function imprimir(e){
	
	if (!textArea.value.trim().length==0 && !textArea.value=="" && e.keyCode==13) {
		var cuadro = document.createElement("div");
		cuadro.classList.add("cuadrado");
		lista.insertBefore(cuadro, lista[0]);

		var check =document.createElement("input");
		check.setAttribute("type","checkbox");
		check.setAttribute("for", "id" + contador);
		cuadro.insertBefore(check, cuadro[0]);

		var texto = document.createElement("label");
		texto.setAttribute("for", "id" + contador);
		texto.classList.add("largo")
		texto.innerHTML = textArea.value;
		cuadro.insertBefore(texto, cuadro[1]);

		var icono = document.createElement("i");
		icono.classList.add("glyphicon","glyphicon-trash");
		cuadro.appendChild(icono);

		check.addEventListener("click", tachar);
		icono.addEventListener("click", eliminar);

		textArea.value="";
		contador++;
	}	
	
	
}
function tachar () {
	this.nextSibling.classList.toggle("tachado");
}		
function eliminar(){
	this.parentElement.remove();
}