const error = document.getElementById('error');
const success = document.getElementById('success');
success.classList.add("none");
error.classList.add("none");
//UTENTE INSERISCE LA MAIL
const submitButton = document.getElementById('submit-btn');
const userMailInput = document.getElementById('mail');
const mailArray = ["ciao@mail.it", "aldo@mail.it", "giovanni@mail.it", "giacomo@mail.it"];
let message = "Mail non trovata";
let customStyle = "error-color";
const answer = document.getElementById('answer');
answer.classList.add(customStyle);
//CLICCANDO IL PULSANTE INVIA, IL PROGRAMMA ESEGUE LA VERIFICA
submitButton.addEventListener("click", function(){
   //PRENDO IL VALORE DI userMailInput
   const userMail = userMailInput.value;
   let checkMail;
   //CERCO LA MAIL NELL'ARRAY
   for(let i = 0; i < mailArray.length; i++){
    //SE LA TROVO ASSEGNO A MESSAGE ACCESSO CONSENTITO
    if( userMail === mailArray[i]){
        message = "Accesso Consentito";
        customStyle = "success-color";
        answer.classList.add(customStyle);
        checkmail = true;
    }
    if(checkMail === true){
        success.classList.remove("none");
        success.classList.add("block");
    }
    //STAMPO SU SCHERMO IL RISULTATO
    answer.innerHTML = message;
    userMailInput.value = "";
   }
});


