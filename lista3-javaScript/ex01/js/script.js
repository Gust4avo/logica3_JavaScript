function result(){
    var valor_a = parseFloat(prompt("Digite o valor A: "));
    var valor_b = parseFloat(prompt("Digite o valor B: "));
    var valor_c = parseFloat(prompt("Digite o valor C: "));
    var valor_d = parseFloat(prompt("Digite o valor D: "));

   var AmB = valor_a + valor_b;
   var AmC = valor_a + valor_c;
   var AmD = valor_a + valor_d;
   var BmC = valor_b + valor_c;
   var BmD = valor_b + valor_d;
   var CmD = valor_c + valor_d;

   var AxB = valor_a * valor_b;
   var AxC = valor_a * valor_c;
   var AxD = valor_a * valor_d;
   var BxC = valor_b * valor_c;
   var BxD = valor_b * valor_d;
   var CxD = valor_c * valor_d;

   alert("valor A = "+ valor_a + "|valor B " + valor_b + "|valor C " + valor_c + "|valor D " + valor_d + "<br>");
   alert(valor_a + " + " + valor_b + " = " + AmB + "<br>");
   alert(valor_a + " + " + valor_c + " = " + AmC + "<br>");
   alert(valor_a + " + " + valor_d + " = " + AmD + "<br>");
   alert(valor_b + " + " + valor_c + " = " + BmC + "<br>");
   alert(valor_b + " + " + valor_d + " = " + BmD + "<br>");
   alert(valor_c + " + " + valor_d + " = " + CmD + "<br>");
   
   ("</br>");
 
   alert("valor A = "+ valor_a + "|valor B " + valor_b + "|valor C " + valor_c + "|valor D " + valor_d + "<br>");
   alert(valor_a + " * " + valor_b + " = " + AxB + "<br>");
   alert(valor_a + " * " + valor_c + " = " + AxC + "<br>");
   alert(valor_a + " * " + valor_d + " = " + AxD + "<br>");
   alert(valor_b + " * " + valor_c + " = " + BxC + "<br>");
   alert(valor_b + " * " + valor_d + " = " + BxD + "<br>");
   alert(valor_c + " * " + valor_d + " = " + CxD + "<br>");



}