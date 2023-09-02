/* 
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Mail
Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
 */

//Genera un numero random da 1 a 6
let numberUserRandom = Math.floor((Math.random()*6)+1);
console.log(numberUserRandom);
let numberMachineRandom = Math.floor((Math.random()*6)+1);
console.log(numberMachineRandom);

//Assegna il numero random a due giocatori
const userNumber = numberUserRandom;
console.log(userNumber + ' numero giocatore');
const machineNumber = numberMachineRandom;
console.log(machineNumber + ' numero del PC');


function email_validate() {
    //Confronta i due numeri e stabilisci il vincitore dado della Macchina
    if (userNumber > machineNumber){
        const dadoUser = document.getElementById('dado_user');
        //console.log(dadoUser);
        dadoUser.innerHTML = userNumber + (' hai vinto!')
        console.log(dadoUser);
    } else if (userNumber == machineNumber) {
        const dadoUser = document.getElementById('dado_user');
        //console.log(dadoUser);
        dadoUser.innerHTML = userNumber + (' hai pareggiato!, che sfortuna riprova ;D')
        console.log(dadoUser);
    } else if (userNumber < machineNumber) {
        const dadoUser = document.getElementById('dado_user');
        //console.log(dadoUser);
        dadoUser.innerHTML = machineNumber + (' hai perso!, peccato XD')
        console.log(dadoUser);
    }
    //Confronta i due numeri e stabilisci il vincitore dado della Macchina
    if (machineNumber > userNumber){
        const dadoMachine = document.getElementById('dado_machine');
        //console.log(dadoMachine);
        dadoMachine.innerHTML = machineNumber + (' hai vinto!')
        console.log(dadoUser);
    } else if (machineNumber == userNumber) {
        const dadoMachine = document.getElementById('dado_machine');
        //console.log(dadoMachine);
        dadoMachine.innerHTML = machineNumber + (' hai pareggiato!, che sfortuna riprova ;D')
        console.log(dadoMachine);
    } else if (machineNumber < userNumber) {
        const dadoMachine = document.getElementById('dado_machine');
        //console.log(dadoMachine);
        dadoMachine.innerHTML = machineNumber + (' hai perso!, peccato XD')
        console.log(dadoMachine);
    }

    //Associa mail ad un documento id
    //conserva i dati dell'input mail
    //Stampa il risultato
    
}
