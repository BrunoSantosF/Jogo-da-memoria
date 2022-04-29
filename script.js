const cards = ['A','B','C','D','E','F','A','B','C','D','E','F'];

cards.sort(() => 0.5 - Math.random()); //

const board = document.getElementById('grid');

let playerScore = [
    {player:'Jogador1',score: 0},
    {player:'Jogador2',score: 0}
]

let atv = 0;
const aux = [];
const auxID = [];


let player = document.querySelector('#player');
let score = document.querySelector('#score');

function Initializing(){
    for (let i=0;i < cards.length;i++){
        let card = document.createElement('div');
        ChangePlayer();
        card.setAttribute('data-id',i);
        card.setAttribute('id',i);
        card.setAttribute('class','box')
        card.addEventListener('click',Click);
        board.appendChild(card)
        
    }
}

function Click(){
    const cardID = this.getAttribute('data-id');
    let letter = document.getElementById(String(cardID)).textContent = cards[cardID];
    this.style.background = 'blue'
    
    aux.push(letter);
    auxID.push(cardID);

    setTimeout(Check,200);

}
function Check() {
    if (aux.length === 2){
        Correct()
        ClearArrays(aux);
        ClearArrays(auxID);
        
    }
}

function ClearArrays(array){
    array.pop();
    array.pop();
    
}

function Correct(){
    if (aux[0] === aux[1] && auxID[0] != auxID[1]){
        alert('Acertou')
        playerScore[atv].score += 1;
        score.textContent = playerScore[atv].score;
        Result();
        
    }
    else if (aux[0] === aux[1] && auxID[0] == auxID[1]){
        Turn(0)
        Turn(1)  
        alert('Errou !!! Clicou na mesma peça') 
        ChangePlayer();
    }
    else {

        Turn(0)
        Turn(1)  
        alert('Errou') 
        ChangePlayer();
    }
    
    
}
function Result() {
    if (playerScore[0].score + playerScore[1].score == 6){
        if (playerScore[0].score > playerScore[1].score){
            alert('O ' + playerScore[0].player + ' GANHOU !!!!' + 'PONTOS : ' + playerScore[0].score);
        }
        else if (playerScore[0].score == playerScore[1].score){
            alert('EMPATE !!!!');
        }
        else {
            alert('O ' + playerScore[1].player + 'GANHOU !!!!' + 'PONTOS : ' + playerScore[0].score);
        }
    }
}

function ChangePlayer() {
    if (atv == 1){
        atv = 0;
        player.textContent = playerScore[atv].player
        score.textContent = playerScore[atv].score
    }
    else {
        atv = 1;
        player.textContent = playerScore[atv].player
        score.textContent = playerScore[atv].score
    }

}

function Turn(x) {
    let card = document.getElementById(auxID[x]);
    card.textContent = ' ';
    card.style.background = 'red'
}

Initializing();

//console.log(card);