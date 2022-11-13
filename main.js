function numbers(valor){

	document.getElementById('result').value += valor;
}

function operacion(){
	var opera = document.getElementById('result').value;

	if(opera == 0){
		document.getElementById('result').value = "Can not operate";		
	}else{
		document.getElementById('result').value = eval(opera);
	}
}
function Reset(){
	document.getElementById('result').value = "";
}
