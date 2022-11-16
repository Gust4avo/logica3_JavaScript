function valor(){
    var cot_dolar = parseFloat(prompt("Digite a cotação do dolar: "));
    var qtnDolar = parseFloat(prompt("Digite a quantidade de dolares que voçê possui: "));

    var conversao = cot_dolar * qtnDolar

    document.write("O valor da conversão em reais é: " + conversao);
}