/* 
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Mail
Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
 */



const buttonGenera = document.getElementById('button_generate');
const dadoUser = document.getElementById('dado_user');
const dadoMachine = document.getElementById('dado_machine');



//Associa un buttone ad un funzione e al click stampa a video il risultato
buttonGenera.addEventListener('click', function () {
    dadoUser.innerHTML = ' ';
    dadoMachine.innerHTML = ' ';
    //Genera un numero random da 1 a 6
    let numberUserRandom = Math.floor((Math.random() * 6) + 1);
    console.log(numberUserRandom);
    let numberMachineRandom = Math.floor((Math.random() * 6) + 1);
    console.log(numberMachineRandom);

    //Assegna il numero random a due giocatori
    const userNumber = numberUserRandom;
    console.log(userNumber + ' numero giocatore');
    const machineNumber = numberMachineRandom;
    console.log(machineNumber + ' numero del PC');

    //Confronta i due numeri e stabilisci il vincitore dado della Macchina  
    if (userNumber > machineNumber) {
        //console.log(dadoUser);
        dadoUser.innerHTML = userNumber + (' Hai vinto!')
        console.log(dadoUser);
        dadoMachine.innerHTML = machineNumber + (' la Macchina ha perso!, evviva XD')
        console.log(dadoMachine);
    } else if (userNumber == machineNumber) {
        //console.log(dadoUser);
        dadoUser.innerHTML = userNumber + (' Hai pareggiato!, che sfortuna riprova ;D')
        console.log(dadoUser);
        dadoMachine.innerHTML = machineNumber + (' la Macchina ha pareggiato con te!, che sfortuna riprova ;D')
        console.log(dadoMachine);
    } else if (userNumber < machineNumber) {
        //console.log(dadoUser);
        dadoUser.innerHTML = machineNumber + (' Hai perso!, peccato XO')
        console.log(dadoUser);
        dadoMachine.innerHTML = machineNumber + (' la Macchina ha vinto! buuuuu XD')
        console.log(dadoMachine);
    }
})



//Crea un array con un lista di email
const listaEmail = ['marco', 'giulia', 'giulio', 'elisa'];

//Crea un buttone
const btnClick = document.getElementById('button_check');



//Crea una variabile di accesso di verifica dell'utente
let accessCheck = false;
const inputMail = document.getElementById('result_check');



//Crea un ciclo loop dentro la lista

console.log(accessCheck);
btnClick.addEventListener('click', function () {
    for (let i = 0; i < listaEmail.length; i++) {
        //Crea unan varibile constante con all'interno la mail inserita dall'utente
        const userMail = document.getElementById('user_mail').value;
        console.log(userMail);
        const mailOfList = listaEmail[i];
        console.log(mailOfList);
    }
        //Se la mail dell'utente è identica a una mail della lista: accesso autorizzato
        if (userMail < mailOfList) {
           
            console.log('accesso autorizzato');                                // --> trova soluzione bottone, non stampa il log
        } else {
            console.log('accesso negato');
    }
})

//Controlla se presente nell lista


//Verifica se vero l'accesso è autorizzato, altrimenti è negato