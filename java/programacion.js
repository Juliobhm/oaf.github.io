window.onload = escucha;

var parametro = document.getElementsByName('parametro');
var parametroNumero;
var parametroCampo;
var  etiqueta = document.getElementsByClassName('etiquetas');
var rango = Math.round(document.getElementById('rango'));
var litrosAire = document.getElementById('litrosAireValor');
var litrosOxigeno  = document.getElementById('litrosOxigenoValor');
var flujo  = document.getElementById('flujoValor');
var fio2  = document.getElementById('fio2Valor');

function escucha(){
    document.getElementById('litrosAireValor').innerHTML = Math.round(litrosAire);
    document.getElementById('litrosOxigenoValor').innerHTML = Math.round(litrosOxigeno);
    
    for (i=0; i<4; i++){
    if (parametro[i].checked == false) {
       console.log('parametro unchecked');
  
        rango = document.getElementById('rango');
    
        for (i=0; i<21; i++){
            document.getElementById('rango').stepDown();
        }
        
     }
     rango.style.display = 'none';
    }

    for (i=0; i<4; i++){
      parametro[i].addEventListener('input', parametroSeleccionado);
    }
   
    rango=document.getElementById('rango');
    rango.addEventListener('input', actualizarRango);


}
function parametroSeleccionado(){
  
  
    for (i=0; i<4; i++){
        rango.style.display = '';
        etiqueta[i].style.color= "black";
        etiqueta[i].style.backgroundColor = "white";
        

        if (parametro[i].checked == true) {
            parametroNumero = i;
         }
       
    }

        if (parametroNumero ==0){
            parametroCampo = document.getElementById('litrosAireValor');
            rango.max = '50';
            rango.min = '0';

        }
        else if (parametroNumero ==1){
            parametroCampo = document.getElementById('litrosOxigenoValor');;
            rango.max = '50';
            rango.min = '0';
        }
        else if (parametroNumero ==2){
            parametroCampo = document.getElementById('flujoValor');
            rango.max = '60';
        }
        else if (parametroNumero ==3){
            parametroCampo = document.getElementById('fio2Valor');
            rango.min = '21';
            rango.max = '100';
        }
        parametroCampo.style.color= "white";
        parametroCampo.style.backgroundColor = "rgb(155, 136, 135)";
        parametroCampo.style.borderRadius = "8px";
        parametroCampo.style.padding = "4px 35px";
  
    var valor = Number(parametroCampo.textContent);
    var diferencia = valor - rango.value;
    console.log("parametroNumero: ", parametroNumero, "valor: ", valor, "rango: ", rango.value, "diferenica: ", diferencia)

   
    if (diferencia >= 0) {
        for (i=0; i<diferencia; i++){
        document.getElementById('rango').stepUp();
       
    }
}
    else {
        for (i=0; i>diferencia; i--){
        document.getElementById('rango').stepDown();
    }
    }

}
   
function actualizarRango(){
   // var parametro = document.getElementsByName('parametro');
    var parametroElegido;
    var rango = document.getElementById("rango");
    var litrosAire = document.getElementById("litrosAireValor");
    var litrosOxigeno = document.getElementById("litrosOxigenoValor");
    var flujo = document.getElementById("flujoValor");
    var fio2 = document.getElementById("fio2Valor");
    var litrosAireV = Number(litrosAire.textContent);
    var litrosOxigenoV = Number(litrosOxigeno.textContent);
    var flujoV = Number(flujo.textContent);
    var fio2V = Number(fio2.textContent);


        for(i=0;i<4;i++){
            if(parametro[i].checked){
            parametroElegido=parametro[i].value;
            }
        }


     if (parametroElegido == "litrosAire"){
        litrosAireV = Number(rango.value);
        litrosAire.innerHTML=litrosAireV;
       
        flujo.innerHTML=Math.round((litrosAireV + litrosOxigenoV));
        var fio2calculada = Math.round((litrosAireV * 21 + litrosOxigenoV * 100) / (litrosAireV + litrosOxigenoV));
        console.log('fio2 calculada: ', fio2calculada);
        if (isNaN(fio2calculada)) {
            document.getElementById('fio2Valor').innerHTML = "21"}
        else{document.getElementById('fio2Valor').innerHTML = fio2calculada};

       /*  fio2.innerHTML= Math.round((litrosAireV * 21 + litrosOxigenoV * 100) / (litrosAireV + litrosOxigenoV)); */
     }
    else if (parametroElegido == "litrosOxigeno"){
        litrosOxigenoV = Number(rango.value);
        litrosOxigeno.innerHTML=litrosOxigenoV;
        flujo.innerHTML=Math.round((litrosAireV + litrosOxigenoV));
        var fio2calculada = Math.round((litrosAireV * 21 + litrosOxigenoV * 100) / (litrosAireV + litrosOxigenoV));
        console.log('fio2 calculada: ', fio2calculada);
        if (isNaN(fio2calculada)){
            document.getElementById('fio2Valor').innerHTML = "21"}
        else{document.getElementById('fio2Valor').innerHTML = fio2calculada};
        
        /* fio2.innerHTML= Math.round((litrosAireV * 21 + litrosOxigenoV * 100) / (litrosAireV + litrosOxigenoV)); */
     }


     if (parametroElegido == "flujo"){
        flujoV = Number(rango.value);
        flujo.innerHTML=flujoV;
        litrosAireV = (100 - fio2V) * flujoV/79;
        litrosAire.innerHTML = Math.round(litrosAireV);
        litrosOxigeno.innerHTML = Math.round((flujoV - litrosAireV));
     }
     if (parametroElegido == "fio2"){
        fio2V = Number(rango.value);
        fio2.innerHTML=fio2V;
        litrosAireV = flujoV*(100-fio2V)/79;
        litrosAire.innerHTML =  Math.round(litrosAireV);
        litrosOxigeno.innerHTML = Math.round((flujoV - litrosAireV));


     }
    
    }




