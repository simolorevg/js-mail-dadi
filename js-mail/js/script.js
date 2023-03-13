//UTENTE INSERISCE LA MAIL
const submitButton = document.getElementById('submit-btn');
const userMailInput = document.getElementById('mail');
//CLICCANDO IL PULSANTE INVIA, IL PROGRAMMA ESEGUE LA VERIFICA
submitButton.addEventListener("click", function(){
   const userMail = userMailInput.value;
   console.log(userMail);
})