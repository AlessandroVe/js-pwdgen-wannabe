/* chiedi il nome */
var username=prompt("Ciao come ti chiami?");
document.getElementById("user").innerHTML="Benvenuto " + username;
/*  */
/* chiedi cognome*/
var surname=prompt("E qual'e' il tuo cognome?")
document.getElementById("surname-user").innerHTML="Il tuo cognome e': " + surname;
/* chiedi colore */
var color=prompt("E qual'e' il tuo colore preferito?")
document.getElementById("favorite-color").innerHTML="Il tuo colore preferito e': " + color;
/* for us */
var forUs= username+surname+color;
document.getElementById("for-us").innerHTML="Per noi sarai sempre: " + forUs +21;


