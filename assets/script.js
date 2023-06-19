//contagem pontos
var contYou = 0;
var contCpu = 0;

//Elementos da aplicação
const imgYou = document.getElementById("imgYou");
const imgCpu = document.getElementById("imgCpu");
const btnPlay = document.getElementById("buttonJogar");
const contYouTarget = document.getElementById("contYou");
const contCpuTarget = document.getElementById("contCpu");
const mainTarget = document.getElementById("main");

//Pensar em criar elementos tela vencedor e perdedor
// const imgUser = document.getElementById("");
// const imgUser = document.getElementById("");

//Variaveis de elementos
var playerYou = "";
var playerCpu = "";

//Função para iniciar o jogo
btnPlay.addEventListener("click", () => {
  reset(), playCpu();
});

//remover tela jogo
function removeMain() {
    mainTarget.remove();
  }


// function winner() {
//   // Cria elementos para o card
//   var cardContainer = document.getElementById("winner");
//   var card = document.createElement("div");
//   var cardBody = document.createElement("div");
//   var cardTitle = document.createElement("h1");
//   var cardText = document.createElement("p");

//   // Adiciona classes do Bootstrap aos elementos
//   card.classList.add("card");
//   cardBody.classList.add("card-body");
//   cardTitle.classList.add("card-title");
//   cardText.classList.add("card-text");

//   // Define o conteúdo dos elementos
//   cardTitle.innerText = "Você venceu. Parabéns!";
//   cardText.innerText = "Conteúdo do Card";

//   // Monta a estrutura do card
//   cardBody.appendChild(cardTitle);
//   cardBody.appendChild(cardText);
//   card.appendChild(cardBody);
//   cardContainer.appendChild(card);
// }



function reset() {
  playerYou = document.querySelector('input[name="play"]:checked').value;
  imgYou.innerHTML = `<img src='./assets/images/icons/${playerYou}.png' width='120px''>`;
  imgCpu.innerHTML = "";
}

function playCpu() {
  let opt = ["pedra", "papel", "tesoura"];
  let num = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  playerCpu = opt[num];
  imgCpu.innerHTML = `<img src='./assets/images/icons/${playerCpu}.png' width='120px''>`;
  analyze();
}

function analyze() {
  let win = "0";
  //variaveis do jogo
  // 0 = empate
  //1 = vitoria
  //-1 = derrota
  if (playerYou == playerCpu) {
  } else if (playerYou == "pedra") {
    win = playerCpu == "tesoura" ? 1 : -1;
  } else if (playerYou == "papel") {
    win = playerCpu == "pedra" ? 1 : -1;
  } else if (playerYou == "tesoura") {
    win = playerCpu == "papel" ? 1 : -1;
  }

  if (win == 0) {
  } else if (win > 0) {
    contYou = contYou + 1;
  } else {
    contCpu = contCpu + 1;
  }

  contYouTarget.innerHTML = contYou;
  contCpuTarget.innerHTML = contCpu;

//   setTimeout(() => {
//     btnPlay.disabled = false;
//     clear();
//   }, 3000);

//   if (contYou >= 5) {
//     removeMain();
//     winner();
//   }
}

function clear() {
  imgYou.innerHTML = "";
  imgCpu.innerHTML = "";
}
