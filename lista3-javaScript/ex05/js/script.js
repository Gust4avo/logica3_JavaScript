function valor(){
    var cotadolar = parseFloat(prompt("Digite a cotação atual do dolar: "));
    var qtdreais = parseFloat(prompt("quantos reais voçê tem? "));

    var conversao = qtdreais / cotadolar;

    alert("o valor da conversao em dolar é: " + conversao);
}