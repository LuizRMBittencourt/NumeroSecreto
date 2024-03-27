let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.5});
}

mensagensIniciais();

function verificarChute(){
    let chute = document.querySelector('input').value;

   if (chute == numeroAleatorio){
    exibirTextoNaTela('h1', 'Ganhou!');
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemGanhou = `Voce acertou o numero com ${tentativas} ${palavraTentativas}`;
    exibirTextoNaTela('p', mensagemGanhou);
    document.getElementById('reiniciar').removeAttribute('disabled');   
   } else {
    if(chute > numeroAleatorio){
        exibirTextoNaTela('p', 'O Numero Secreto é menor');
    }else{
        exibirTextoNaTela('p', 'O Numero Secreto é maior');
    }   
    tentativas++;
    limparCampo();
   }
}


function gerarNumeroAleatorio(){
    let numeroSorteado =  parseInt(Math.random() * numeroLimite +1);
    let quantidadeNumerosLista = listaNumerosSorteados.length;

    if(quantidadeNumerosLista == numeroLimite){
        listaNumerosSorteados = [];
    }

    if(listaNumerosSorteados.includes(numeroSorteado)){
        return gerarNumeroAleatorio();
    } else{
        listaNumerosSorteados.push(numeroSorteado);
        console.log(listaNumerosSorteados);
        return numeroSorteado;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciaGame(){
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagensIniciais();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function mensagensIniciais(){
    exibirTextoNaTela('h1', 'Jogo do numero secreto!!');
    exibirTextoNaTela('p', `Escolha um numero de um a 10`);
}