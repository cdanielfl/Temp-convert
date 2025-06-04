function converterCtoF(tempC) { 
    const tempF = (tempC * 9/5) + 32; 
    console.log(` Temperatura =  ${tempF}°F`)
    return tempF
}

function converter() {
    let tempC = document.getElementById('tempC').value;
    console.log(`Temp C°: ${tempC}`);
    const resultado = converterCtoF(tempC);
    
    document.getElementById('resultado').innerHTML = `${resultado} F°`  
}



function limpar() {
    document.getElementById('tempC').value = '';
    document.getElementById('resultado').innerHTML = '';
    console.log('Campos limpos');
}