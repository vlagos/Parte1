window.onload = function() {
	document.getElementById("nombreEmail").focus();
};

function EnviarEmail()
{
	document.getElementById("errorEmail").innerHTML = "";
	var nombre=+document.getElementById("nombreEmail").value;
	var rut=document.getElementById("rut").value;
	var email=document.getElementById("email").value;
	var telefono=+document.getElementById("telefono").value;
	var mensaje=+document.getElementById("mensaje").value;
	if(nombre=="")
	{
		document.getElementById("errorEmail").innerHTML = "Ingrese Nombre.";
		document.getElementById("nombreEmail").focus();
	}
	else if(checkRut(rut) == false)
	{
		document.getElementById("errorEmail").innerHTML = "Ingrese Rut.";
		document.getElementById("rut").focus();
	}
	else if(validarEmail(email) == false)
	{
		document.getElementById("errorEmail").innerHTML = "El correo no es correcto.";
		document.getElementById("email").focus();
	}
	
	else if(telefono=="")
	{
		document.getElementById("errorEmail").innerHTML = "Ingrese teléfono.";
		document.getElementById("telefono").focus();
	}
	else if(mensaje=="")
	{
		document.getElementById("errorEmail").innerHTML = "Ingrese mensaje.";
		document.getElementById("mensaje").focus();
	}
	else
	{
		setTimeout(function(){
		alert("Mensaje Enviado Correctamente!!!");
		},200);
		LimpiarEmail();
	}	
}

function LimpiarEmail()
{
	document.getElementById("errorEmail").innerHTML = "";
	var nombre=document.getElementById("nombreEmail").value = "";
	var rut=document.getElementById("rut").value = "";
	var email=document.getElementById("email").value = "";
	var telefono=document.getElementById("telefono").value = "";
	var mensaje=document.getElementById("mensaje").value = "";
	document.getElementById("nombreEmail").focus();
}

function validarEmail(valor) 
{
	if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor))
	{
	return true;
	} 
	else 
	{
	return false;
	}
}

function formatCliente(cliente)
{
	cliente.value = cliente.value.replace(/[.-]/g, '')
	.replace( /^(\d{1,2})(\d{3})(\d{3})(\w{1})$/, '$1.$2.$3-$4')
}

function checkRut(rut) {
	// Despejar Puntos
	var valor1 = String(rut).replace('.','');
	var valor = String(valor1).replace('.','');
    // Despejar Guión
    valor = valor.replace('-','');
    // Aislar Cuerpo y Dígito Verificador
    cuerpo = valor.slice(0,-1);
    dv = valor.slice(-1).toUpperCase();
    // Formatear RUN
    rut.value = cuerpo + '-'+ dv
    // Si no cumple con el mínimo ej. (n.nnn.nnn)
	if(cuerpo.length < 7) 
	{ 
		return false;
	}
    // Calcular Dígito Verificador
    suma = 0;
    multiplo = 2;
	// Para cada dígito del Cuerpo
	for(i=1; i<=cuerpo.length; i++) 
	{
        // Obtener su Producto con el Múltiplo Correspondiente
        index = multiplo * valor.charAt(cuerpo.length - i);
        // Sumar al Contador General
        suma = suma + index;
        // Consolidar Múltiplo dentro del rango [2,7]
        if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
    }
    // Calcular Dígito Verificador en base al Módulo 11
    dvEsperado = 11 - (suma % 11);
    // Casos Especiales (0 y K)
    dv = (dv == 'K')?10:dv;
    dv = (dv == 0)?11:dv;
    // Validar que el Cuerpo coincide con su Dígito Verificador
	if(dvEsperado != dv) 
	{ 
		return false; 
	}
	else
	{
		return true; 
	}
}

function soloLetras(e){
	key = e.keyCode || e.which;
	tecla = String.fromCharCode(key).toLowerCase();
	letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
	especiales = "8-37-39-46";
	tecla_especial = false
	for(var i in especiales){
		 if(key == especiales[i]){
			 tecla_especial = true;
			 break;
		 }
	 }
	 if(letras.indexOf(tecla)==-1 && !tecla_especial){
		 return false;
	 }
 }

 function limpiaNumeros(elemento) {
    var val = document.getElementById(elemento).value;
    var tam = val.length;
    for(i = 0; i < tam; i++) {
        if(!isNaN(val[i]))
            document.getElementById(elemento).value = '';
    }
}

function limpiaLetras(elemento) {
    var val = document.getElementById(elemento).value;
    var tam = val.length;
    for(i = 0; i < tam; i++) {
        if(isNaN(val[i]))
            document.getElementById(elemento).value = '';
    }
}

function soloNumeros(e){
    tecla = (document.all) ? e.keyCode : e.which;
    //Tecla de retroceso para borrar, siempre la permite
    if (tecla==8)
    {
        return true;
    }  
    // Patron de entrada, en este caso solo acepta numeros
    patron =/[0-9]/;
    //patron =/[0-9-.]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}