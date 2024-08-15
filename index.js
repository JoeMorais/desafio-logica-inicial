//Variáveis de nome e xp do personagem
let nomeDoHeroi = "Jonatas"
let xp = 10001

//Imprimir o nome e o nível do personagem
console.log("O Herói de nome " + nomeDoHeroi + " está no nivel de " + xp);

//Condições para executar a verificação
switch (xp) {
   case (xp < 1000):
       console.log("Seu herói está no ranking Ferro");
       break;
   case (xp < 2000):
       console.log("Seu herói está no ranking Bronze");
       break;
   case (xp < 5000):
       console.log("Seu herói está no ranking Prata");
       break;       
   case (xp < 7000):
       console.log("Seu herói está no ranking Ouro");
       break;           
   case (xp < 8000):
       console.log("Seu herói está no ranking Platina");
       break;      
   case (xp < 9000):
       console.log("Seu herói está no ranking Ascendente");
       break;       
   case (xp < 1000):
       console.log("Seu herói está no ranking Imortal");
       break;     
      default:
       console.log("Seu herói está no ranking Radiante");
       break;
}
