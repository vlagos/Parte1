window.onload = function() {
	document.getElementById("peso").focus();
};

function Convertir()
{
	document.getElementById("error_form").innerHTML = "";
	var Peso=+document.getElementById("peso").value;
	var combo1 = document.getElementById("cbxTipo1");
	var combo2 = document.getElementById("cbxTipo2");
	var monedaDe =+ combo1.options[combo1.selectedIndex].value;
	var monedaA =+ combo2.options[combo2.selectedIndex].value;
	if(Peso != "")
	{
		if(monedaDe != 0)
		{
			if(monedaA != 0)
			{
				if(monedaDe != monedaA)
				{
					if(monedaDe == 1)
					{
						switch(monedaA) {
						    case 2:
						        DolarEuro()
						        break;
					        case 3:
					        	DolarPeso();
					        break;
						}
					}
					else if(monedaDe == 2)
					{
						switch(monedaA) {
						    case 1:
						        EuroDolar();
						        break;
					        case 3:
					        	EuroPeso();
					        break;
						}
					}
					else if(monedaDe == 3)
					{
						switch(monedaA) {
						    case 1:
						        PesoDolar();
						        break;
						    case 2:
						        PesoEuro();
						        break;
						}
					}
				}
				else
				{
					document.getElementById("error_form").innerHTML = "La moneda a convertir no puede ser del mismo tipo.";
			        document.getElementById("cbxTipo2").focus();
				}
			}
			else
			{
				document.getElementById("error_form").innerHTML = "Seleccione cambio.";
		        document.getElementById("cbxTipo2").focus();
			}
		}
		else
		{
			document.getElementById("error_form").innerHTML = "Seleccione divisa.";
	        document.getElementById("cbxTipo1").focus();
		}
	}
	else
	{
		document.getElementById("error_form").innerHTML = "Ingrese cantidad.";
        document.getElementById("peso").focus();
	}
}

function PesoEuro()
{
	var Peso=+document.getElementById("peso").value;
	var Peso = Peso * 770;
	document.getElementById("resultado").value = Peso.toFixed(1);
}

function PesoDolar()
{
	var Peso=+document.getElementById("peso").value;
	var Peso = Peso * 675;
	document.getElementById("resultado").value = Peso.toFixed(1); 
}

function DolarPeso()
{
	var Peso=+document.getElementById("peso").value;
	var Peso = Peso * 675;
	document.getElementById("resultado").value = Peso.toFixed(1); 
}

function DolarEuro()
{
	var Peso=+document.getElementById("peso").value;
	var Peso = Peso * 0.87;
	document.getElementById("resultado").value = Peso.toFixed(1); 
}

function EuroPeso()
{
	var Peso=+document.getElementById("peso").value;
	var Peso = Peso * 775;
	document.getElementById("resultado").value = Peso.toFixed(1); 
}

function EuroDolar()
{
	var Peso=+document.getElementById("peso").value;
	var Peso = Peso * 1.14;
	document.getElementById("resultado").value = Peso.toFixed(1); 
}

function Limpiar()
{
	document.getElementById("peso").value = "";
	document.getElementById("resultado").value = "";
	document.getElementById("cbxTipo1").value = '0';
	document.getElementById("cbxTipo2").value = '0';
	document.getElementById("peso").focus();
}

function filterFloat(evt,input){
    // Backspace = 8, Enter = 13, ‘0′ = 48, ‘9′ = 57, ‘.’ = 46, ‘-’ = 43
    var key = window.Event ? evt.which : evt.keyCode;    
    var chark = String.fromCharCode(key);
    var tempValue = input.value+chark;
    if(key >= 48 && key <= 57){
        if(filter(tempValue)=== false){
            return false;
        }else{       
            return true;
        }
    }else{
      if(key == 8 || key == 13 || key == 0) {     
          return true;              
      }else if(key == 46){
            if(filter(tempValue)=== false){
                return false;
            }else{       
                return true;
            }
      }else{
          return false;
      }
    }
}
function filter(__val__){
    var preg = /^([0-9]+\.?[0-9]{0,1})$/; 
    if(preg.test(__val__) === true){
        return true;
    }else{
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