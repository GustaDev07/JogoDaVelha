let tabuleiro;
let board;
let aviso;
let jogador;
let linha;
let coluna;

function iniciar() {
  tabuleiro = [];
  board = document.getElementById("board");
  aviso = document.getElementById("aviso");
  jogador = 1;

  for (let i = 0; i < 3; i++) {
    tabuleiro[i] = [];
    for (let j = 0; j < 3; j++) {
      tabuleiro[i][j] = 0;
    }
  }

  console.table(tabuleiro);
  exibir();
}

function exibir() {
  let tabela = '<table cellpadding = "10" border = "1">';

  for (let i = 0; i < 3; i++) {
    tabela += "<tr>";

    for (let j = 0; j < 3; j++) {

        let marcador
        switch(tabuleiro[i][j]){//Exibirá as informações do jogo na body do HTML.

            case -1: marcador = 'X'; break;
            case 1: marcador = 'O'; break;
            default: marcador =  '-'
        }

      tabela += "<td>" + marcador +  "</td>";
    }
    tabela += "</tr>";
  }
  tabela += "</table>";

  board.innerHTML = tabela;
}
function jogar() {
  aviso.innerHTML = "Vez do jogador: " + numeroJogador();
  linha = document.getElementById("linha").value - 1;
  coluna = document.getElementById("coluna").value - 1;

  if (tabuleiro[linha][coluna] == 0) {
    tabuleiro[linha][coluna] = numeroJogador() == 1 ? 1 : -1; //Operador ternário: Esse trecho de código diz 
    // que se for o jogador um quem joga, adiciona o 1 no campo do tabuleiro, se nao for o jogador 1, 
    // adicione -1. (Isso fará com que possamos somar o placar e saber quem ganhou no final do jogo)
  }else{
    aviso.innerHTML = "Esse campo ja foi marcado!"//Serve para evitar do mesmo campo ser marcado. 
    //Caso haja essa tentativa, o campo não é alterado por outro valor.
  }

  console.log(linha, coluna);
  console.table(tabuleiro);

  jogador++;
  exibir()
  checar()
}

function checar() {//Verificará quem ganhou.

    //Linhas
    for(let i = 0; i < 3; i++){
        let soma = 0
        soma = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2] 
        if(soma == 3 || soma == - 3){// || se chama Pipe, equivalente ao 'or' que utilizamos no python.
            aviso.innerHTML = 'O jogador ' + numeroJogador() + ' ganhou!'
        }
    }
    
    //Colunas
    for(let i = 0; i < 3; i++){
        let soma = 0
        soma = tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[2][i] 
        if(soma == 3 || soma == - 3){// || se chama Pipe, equivalente ao 'or' que utilizamos no python.
            aviso.innerHTML = 'O jogador ' + numeroJogador() + ' ganhou!'
        }
    }

    //Diagonal
    for(let i = 0; i < 3; i++){
        let soma = 0
        soma = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2] 
        if(soma == 3 || soma == - 3){// || se chama Pipe, equivalente ao 'or' que utilizamos no python.
            aviso.innerHTML = 'O jogador ' + numeroJogador() + ' ganhou!'
        }
    }
}

function numeroJogador() {
  return (jogador % 2) + 1;
}
function resetar() {
    // Seleciona o botão pelo ID
    const botaoRecarregar = document.getElementById("buttonReset");

    // Adiciona o evento de clique
    botaoRecarregar.addEventListener("click", function() {
        // O parâmetro 'true' (opcional) força o recarregamento pelo servidor, 
        // ignorando o cache do navegador.
        location.reload(); 
    });
}