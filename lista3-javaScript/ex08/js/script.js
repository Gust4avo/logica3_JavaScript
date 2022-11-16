function valor(){

    var valorA = parseInt(prompt("Digite o valor A: "));
    var valorB = parseInt(prompt("Digite o valor B: "));
    var valorC = parseInt(prompt("Digite o valor C"));
    var valorD = parseInt(prompt("Digite o valor D"));

    var VP = valorA + valorC;
    var VS = valorB + valorD;

    alert("O resultado da soma do primeiro valor com o terceiro é: " + VP);
    alert("Eo resultado da soma do sungundo valor com o quarto é: " + VS);

    alert(valorA+ " + " +valorC+ " = " + VP);
    alert(valorB+ " + "+valorD+ "=" + VS);

}