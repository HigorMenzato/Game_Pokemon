var userHP = 100;
var opHP = 100;
var opAttacks = [terremoto, cavar, pedrada, caudada];  
var playerMove = 0;
const vitoria = document.getElementById("vic");
const derrota = document.getElementById("der");
const battle = document.getElementById("battle");


function choqueTrovao(){
if(playerMove == 0 && userHP != 0) {
var miss = Math.floor((Math.random() * 10) + 1);
if(miss == 1 ) {
document.getElementById('message').innerHTML = " Pikachu errou o ataque! "
}
else {
document.getElementById('message').innerHTML = " Pikachu usou Choque do Trovão ";
var critical = Math.floor((Math.random() * 10) + 1);
if(critical == 4){
    for(var x = 0; x < 2; x++){
    opHP = opHP - 20;
    }
}
else{
    opHP = opHP - 20;
}
if(opHP < 0 ) { opHP = 0}
document.getElementById('apHP').innerHTML = opHP;
if(opHP == 0){
  document.getElementById('message').innerHTML = " Onix está fora! ";
  battle.pause();
  vitoria.play();
}
playerMove = 1; // contagen de jogas do jogador
}}}

function caudaFerro() {
if(playerMove == 0 && userHP != 0) {
var miss = Math.floor((Math.random() * 10) + 1);
if(miss == 1 ) {
document.getElementById('message').innerHTML = " Pikachu errou o ataque! "
}
else {
document.getElementById('message').innerHTML = " Pikachu usou Cauda de Ferro ";
var critical = Math.floor((Math.random() * 10) + 1);
if(critical == 4){
    for(var x = 0; x < 2; x++){
    opHP = opHP - 20;
    }
}
else{
    opHP = opHP - 20;
}
if(opHP < 0 ) { opHP = 0}
document.getElementById('apHP').innerHTML = opHP;
if(opHP == 0){
document.getElementById('message').innerHTML = " Onix está fora! ";
battle.pause()
vitoria.play();
}
playerMove = 1; // contagen de jogas do jogador
}
}
}
function ataqueRápido() {
if(playerMove == 0 && userHP != 0) {;
var miss = Math.floor((Math.random() * 10) + 1);
if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Pikachu errou o ataque! "
}
else {
    document.getElementById('message').innerHTML = " Pikachu usou ataque rápido ";
    var critical = Math.floor((Math.random() * 10) + 1);
    if(critical == 4){
        for(var x = 0; x < 2; x++){
        opHP = opHP - 10;
        }
    }
    else{
        opHP = opHP - 10;
    }
    if(opHP < 0 ) { opHP = 0}
    document.getElementById('apHP').innerHTML = opHP;
    if(opHP == 0){
    document.getElementById('message').innerHTML = " Onix está fora! ";
    battle.pause();
    vitoria.play();
    }
}
    playerMove = 1; // contagem de jogas do jogador
    }
    }
function bolaEletrica() {
    if(playerMove == 0 && userHP != 0) {
    var miss = Math.floor((Math.random() * 10) + 1);
    if(miss == 1 ) {
        document.getElementById('message').innerHTML = " Pikachu errou o ataque! "
    }
    else {
        document.getElementById('message').innerHTML = " Pikachu usou bola elétrica ";
        var critical = Math.floor((Math.random() * 10) + 1);
        if(critical == 4){
            for(var x = 0; x < 2; x++){
            opHP = opHP - 5;
            }
        }
        else{
            opHP = opHP - 5;
        }
        if(opHP < 0){ opHP = 0}
        document.getElementById('apHP').innerHTML = opHP;
        if(opHP == 0){
        document.getElementById('message').innerHTML = " Onix está fora! ";
        battle.pause();
        vitoria.play();
        }
    }
    playerMove = 1; // contagem de jogas do jogador
    }
    }

/* Movimentação do oponente */
function terremoto() {
var miss = Math.floor((Math.random() * 10) + 1);
if(miss == 1 ) {
document.getElementById('message').innerHTML = " Onix errou o ataque! " // attack missed
}
else {
document.getElementById('message').innerHTML = " Onix usou Terremoto " // attack
    var critical = Math.floor((Math.random() * 10) + 1); // critical
    if(critical == 4){
        for(var x = 0; x < 2; x++){ //critical
        userHP = userHP - 30;
        }
    }
    else{
        userHP = userHP - 30; // no critical
    }
if(userHP < 0) { userHP = 0}
document.getElementById('myHP').innerHTML = userHP;
    if(userHP == 0) {
    document.getElementById('message').innerHTML = " Pikachu está fora! " // fainted
    battle.pause();
    derrota.play();
      }
}
}
function cavar() {
var miss = Math.floor((Math.random() * 10) + 1);
if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Onix errou o ataque! "
}
else {
document.getElementById('message').innerHTML = " Onix usou Cavar! "
var critical = Math.floor((Math.random() * 10) + 1);
    if(critical == 4){
    for(var x = 0; x < 2; x++){
        userHP = userHP - 20;
    }
    }
    else{
    userHP = userHP - 20;
    }
if(userHP < 0) { userHP = 0}
document.getElementById('myHP').innerHTML = userHP;
    if(userHP == 0){
    document.getElementById('message').innerHTML = " Pikachu está fora! "
    battle.pause();
    derrota.play();
    }
}
}
function pedrada() {
    var miss = Math.floor((Math.random() * 10) + 1);
    if(miss == 1 ) {
      document.getElementById('message').innerHTML = " Onix errou o atque! "
    }
    else {
    document.getElementById('message').innerHTML = " Onix usou Pedrada! "
    var critical = Math.floor((Math.random() * 10) + 1);
      if(critical == 4){
        for(var x = 0; x < 2; x++){
          userHP = userHP - 10;
        }
      }
      else{
        userHP = userHP - 10;
      }
    if(userHP < 0) { userHP = 0}
    document.getElementById('myHP').innerHTML = userHP;
      if(userHP == 0){
        document.getElementById('message').innerHTML = " Pikachu está fora! "
        battle.pause();
        derrota.play();
      }
    }
  }
  function caudada() {
    var miss = Math.floor((Math.random() * 10) + 1);
    if(miss == 1 ) {
      document.getElementById('message').innerHTML = " Onix errou o ataque! "
    }
    else {
    document.getElementById('message').innerHTML = " Onix usou Caudada! "
    var critical = Math.floor((Math.random() * 10) + 1);
      if(critical == 4){
        for(var x = 0; x < 2; x++){
          userHP = userHP - 5;
        }
      }
      else{
        userHP = userHP - 5;
      }
    if(userHP < 0) { userHP = 0}
    document.getElementById('myHP').innerHTML = userHP;
      if(userHP == 0){
        document.getElementById('message').innerHTML = " Pikachu está fora! "
        battle.pause();
        derrota.play();
      }
    }
  }
function compPokemon() {
if(playerMove == 1 && opHP != 0) { 
var move = Math.floor((Math.random() * 4) + 1);
    opAttacks[move]();
    playerMove = 0; // contagem de jogadas do jogador
}}





 
