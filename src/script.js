function calcularBoyle(pressao1, volume1, consTemp, grandeza1){
					
    var pressao1 = document.getElementById('pressao1').value;
    var volume1 = document.getElementById('volume1').value;
    var consTemp = document.getElementById('consTemp').value;
    var grandeza1 = document.getElementById('grandeza1').value;

    pressao1 = parseFloat(pressao1);
    volume1 = parseFloat(volume1);
    consTemp = parseFloat(consTemp);

    var resultado1 = 0;

    if (grandeza1 == 'P') {
        resultado1 = consTemp / volume1
    } else if (grandeza1 == 'V') {
        resultado1 = consTemp / pressao1
    } else if (grandeza1 == 'K') {
        resultado1 = pressao1 * volume1
    } else {
        resultado1 = 'NaN'
    }
   
    return resultado1;
};

function calcularLussac(volume2, temperatura2,  consPres, grandeza2){
    
    var temperatura2 = document.getElementById('temperatura2').value;
    var volume2 = document.getElementById('volume2').value;
    var consPres = document.getElementById('consPres').value;
    var grandeza2 = document.getElementById('grandeza2').value;

    temperatura2 = parseFloat(temperatura2);
    volume2 = parseFloat(volume2);
    consPres = parseFloat(consPres);

    var resultado2 = 0;

    if (grandeza2 == 'T') {
        resultado2 = volume2 / consPres
    } else if (grandeza2 == 'V') {
        resultado2 = temperatura2 * consPres
    } else if (grandeza2 == 'K') {
        resultado2 = volume2 / temperatura2
    } else {
        resultado2 = 'NaN'
    }
   
    return resultado2;
};

function calcularCharles(pressao3, temperatura3, consVol, grandeza3){
    
    var temperatura3 = document.getElementById('temperatura3').value;
    var pressao3 = document.getElementById('pressao3').value;
    var consVol = document.getElementById('consVol').value;
    var grandeza3 = document.getElementById('grandeza3').value;

    temperatura3 = parseFloat(temperatura3);
    pressao3 = parseFloat(pressao3);
    consVol = parseFloat(consVol);

    var resultado3 = 0;

    if (grandeza3 == 'T') {
        resultado3 = pressao3 / consVol
    } else if (grandeza3 == 'P') {
        resultado3 = temperatura3 * consVol
    } else if (grandeza3 == 'K') {
        resultado3 = pressao3 / temperatura3
    }else {
        resultado3 = 'NaN'
    }
   
    return resultado3;
};

function calcularClapeyron(pressaoC, volumeC, temperaturaC, mols, grandezaC){
    
    var pressaoC = document.getElementById('pressaoC').value;
    var volumeC = document.getElementById('volumeC').value;
    var temperaturaC = document.getElementById('temperaturaC').value;
    var mols = document.getElementById('mols').value;
    var grandezaC = document.getElementById('grandezaC').value;

    var resultado = 0;
    

    if (grandezaC == 'P') {
        resultado = (mols * 0.082 * temperaturaC) / volumeC
    } else if (grandezaC == 'V') {
        resultado = (mols * 0.082 * temperaturaC) / pressaoC
    } else if (grandezaC == 'T') {
        resultado = ( pressaoC * volumeC ) / ( mols * 0.082 )
    } else if (grandezaC = 'n') {
        resultado = ( pressaoC * volumeC ) / ( 0.082 * temperaturaC )
    } else {
        resultado = 'NaN'
    }



    return resultado;

};


function calcularGeral(TI, VI, PI, TF, VF, PF, grandezaG){
    
    var TI = document.getElementById('TI').value;
    var VI = document.getElementById('VI').value;
    var PI = document.getElementById('PI').value;
    var TF = document.getElementById('TF').value;
    var VF = document.getElementById('VF').value;
    var PF = document.getElementById('PF').value;
    var grandezaG = document.getElementById('grandezaG').value;

    var resultadoG = 0;
    

    if (grandezaG == 'TI') {
        resultadoG = (PI * VI * TF) / (PF * VF)
    } else if (grandezaG == 'VI') {
        resultadoG = (TI * PF * VF) / (PI * TF)
    } else if (grandezaG == 'PI') {
        resultadoG = (TI * PF * VF) / (VI * TF)
    } else if (grandezaG = 'TF') {
        resultadoG = (TI * PF * VF) / (PI * VI)
    }else if (grandezaG == 'VF') {
        resultadoG = PI * VI * TF / TI * PF
    } else if (grandezaG = 'PF') {
        resultadoG = (PI * VI * TF) / (TI * VF)
    }else {
        resultadoG = 'NaN'
    }



    return resultadoG;

};