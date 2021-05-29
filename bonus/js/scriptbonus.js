alert("Benevenuto al password generator meno sicuro al mondo")
var nameuser=prompt("Come ti chiami?");
var surname=prompt("E qual'e' il tuo cognome?");
var soul=prompt("Hai mai lodato il sole?");
var index=prompt("Con che cifra scriveresti uno z-index?");
index=parseInt(index);
var age=prompt("Quanti anni hai?");
age=parseInt(age);
var number1=prompt("scrivi un numero intero positivo");
number1=parseInt(number1);
var value=(number1/100) * age;
document.getElementById("your-password").innerHTML= "La tua password e' :"+ (index-value)+nameuser+((age*3.14)/21)+soul+surname;
