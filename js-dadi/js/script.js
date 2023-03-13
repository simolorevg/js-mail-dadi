// dichiaro due variabili (cpu e giocatore) e sceglieranno un numero casuale tra 1 e 6 compresi
const cpuPlayer = Math.floor( Math.random() * 6) + 1;
const userPlayer = Math.floor( Math.random() * 6) + 1;
let message;
// se sono uguali stampo a schermo parità
if( cpuPlayer === userPlayer){
    message = "Parità";
}else if(cpuPlayer > userPlayer){
    message = "CPU VINCE!!!!";
}else{
    message = "UTENTE VINCE!!!!";
}
console.log(userPlayer, cpuPlayer);
document.getElementById('cpu-choice').innerHTML = cpuPlayer;
document.getElementById('user-choice').innerHTML = userPlayer;
document.getElementById('answer').innerHTML = message;