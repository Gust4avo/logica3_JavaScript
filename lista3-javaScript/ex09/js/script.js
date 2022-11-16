function valor(){

    var salario = parseFloat(prompt("Digite o salario mensal: "));
    var reajuste = parseFloat(prompt("percentual do reajuste: "));

    var novo_salario = salario + (salario * reajuste/100);

    alert ("Seu novo salario é de:"+ novo_salario);

}