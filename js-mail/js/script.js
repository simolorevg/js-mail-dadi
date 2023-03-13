//UTENTE INSERISCE LA MAIL
const submitButton = document.getElementById('submit-btn');
const userMailInput = document.getElementById('mail');
const mailArray = ["ciao@mail.it", "aldo@mail.it", "giovanni@mail.it", "giacomo@mail.it"];
let message = "Mail non trovata";
//CLICCANDO IL PULSANTE INVIA, IL PROGRAMMA ESEGUE LA VERIFICA
submitButton.addEventListener("click", function(){
   //PRENDO IL VALORE DI userMailInput
   const userMail = userMailInput.value;
   //CERCO LA MAIL NELL'ARRAY
   for(let i = 0; i < mailArray.length; i++){
    //SE LA TROVO ASSEGNO A MESSAGE ACCESSO CONSENTITO
    if( userMail === mailArray[i]){
        message = "Accesso Consentito";
    }
    document.getElementById("answer").innerHTML = message;
    userMailInput.value = "";
   }
});
//STAMPO SU SCHERMO IL RISULTATO

