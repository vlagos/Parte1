window.onload = function() {
	document.getElementById("Nombreproducto").focus();
};

function CalcularIva()
{
	var tasa = 19;
	var cantidad = +document.getElementById("cantidad").value;
	var precio = +document.getElementById("precio").value;
	var descuento= +document.getElementById("descuento").value;
	var nombre=document.getElementById("Nombreproducto").value;
	document.getElementById("errorIva").innerHTML = "";
	if(nombre=="")
	{
		document.getElementById("errorIva").innerHTML = "Ingrese Nombre del Producto.";
		document.getElementById("Nombreproducto").focus();
	}
	else if(cantidad<=0)
	{
	    document.getElementById("errorIva").innerHTML = "Ingrese Cantidad mayor a 0.";
	    document.getElementById("cantidad").focus();
	}
	else if(precio<=0)
	{
	    document.getElementById("errorIva").innerHTML = "Ingrese Precio mayor a 0.";
	    document.getElementById("precio").focus();
	}
	else if(descuento<0)
	{
	    document.getElementById("errorIva").innerHTML = "Ingrese el descuento.";
	    document.getElementById("descuento").focus();
	}
	else 
	{
		var monto = (cantidad * precio);
		var descuento = (monto*descuento)/100;
		var neto = monto-descuento;
		var iva = (neto * tasa)/100;
		var total = neto+iva;
		document.getElementById("neto").value = fNumber.go(Math.round(neto), '$');
		document.getElementById("iva").value = fNumber.go(Math.round(iva),'$');
		document.getElementById("total").value = fNumber.go(Math.round(total),'$');
  }
}

function LimpiarIva()
{
	document.getElementById("error_form").innerHTML = "";
	document.getElementById("Nombreproducto").value = "";
	document.getElementById("cantidad").value = "";
	document.getElementById("precio").value = "";
	document.getElementById("descuento").value = "";
	document.getElementById("neto").value = "";
	document.getElementById("iva").value = "";
	document.getElementById("total").value = "";
	document.getElementById("Nombreproducto").focus();
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

var fNumber = {
	sepMil: ".", // separador para los miles
	sepDec: ',', // separador para los decimales
	formatear:function (num){
	num +='';
	var splitStr = num.split('.');
	var splitLeft = splitStr[0];
	var splitRight = splitStr.length > 1 ? this.sepDec + splitStr[1] : '';
	var regx = /(\d+)(\d{3})/;
	while (regx.test(splitLeft)) {
		splitLeft = splitLeft.replace(regx, '$1' + this.sepMil + '$2');
	}
		return this.simbol + splitLeft + splitRight;
	},
	go:function(num, simbol){
		this.simbol = simbol ||'';
		return this.formatear(num);
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

 function limpiaLetras(elemento) {
    var val = document.getElementById(elemento).value;
    var tam = val.length;
    for(i = 0; i < tam; i++) {
        if(isNaN(val[i]))
            document.getElementById(elemento).value = '';
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