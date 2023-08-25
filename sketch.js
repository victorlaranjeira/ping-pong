let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2;

let xRaquete = 5;
let yRaquete = 150;
let widthRaquete = 10;
let heightRaquete = 70;

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

let colidiu = false;

let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha()
  mostraRaquete(xRaquete, yRaquete)
  mostraRaquete(xRaqueteOponente, yRaqueteOponente)
  movimentaBolinha()
  movimentaRaquete()
  movimentaRaqueteOponente()
  verificaColisaoBorda()
  //verificaColisaoRaquete()
  colisaoMinhaRaqueteBiblioteca(xRaquete, yRaquete)
  colisaoMinhaRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente)
  incluiPlacar()
  marcaPonto()
  
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
  
}

function mostraRaquete(x,y){
  rect(x, y, widthRaquete, heightRaquete)
}



function movimentaBolinha(){
  xBolinha  += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function movimentaRaqueteOponente(){
  if (keyIsDown(87)){
    yRaqueteOponente -= 10;
  }

  if (keyIsDown(83)) {
    yRaqueteOponente += 10;
  }
}

function verificaColisaoBorda(){
   if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1
  }
   if(yBolinha + raio> height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1
  }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + widthRaquete && yBolinha - raio < yRaquete + heightRaquete && yBolinha + raio > yRaquete ){
    velocidadeXBolinha *= -1
  }
}

function colisaoMinhaRaqueteBiblioteca(x, y){
   colidiu = collideRectCircle(x, y, widthRaquete, heightRaquete, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1
  }
}

function verificaColisaoRaqueteOponente(){
  if (xBolinha + raio > xRaqueteOponente + widthRaquete && yBolinha + raio > yRaqueteOponente + heightRaquete && yBolinha - raio < yRaqueteOponente ){
    velocidadeXBolinha *= -1
  }
}

function incluiPlacar(){
  textAlign(CENTER)
  textSize(16)
  fill(255)
  text(meusPontos, 150, 26)
  text(pontosDoOponente, 450, 26)
  
}

function marcaPonto(){
  if(xBolinha > 590){
    meusPontos += 1;
  }
  if(xBolinha < 10){
    pontosDoOponente +=1;
  }
}

