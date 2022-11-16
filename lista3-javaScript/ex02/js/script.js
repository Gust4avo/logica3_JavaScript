function valor(){
    var comprimento = parseFloat(prompt("Digite o valor do comprimento da caixa: "));
    var largura = parseFloat(prompt("Digite o valor da largura da caixa: "));
    var altura = parseFloat(prompt("Digite o valor da altura da caixa: "));

    var volume = comprimento * largura * altura;

    alert ("O volume da caixa é: " + volume)
}