// VARIÁVEL QUE ARMAZENA O NÚMERO MÁXIMO PARA O GERADOR DE NÚMEROS ALEATÓRIOS (caso queira mudar o número, altere essa varíavel!)
let numeroMaximo = 10;

// ARRAY/LISTA QUE GUARDA TODOS NÚMEROS JÁ SORTEADOS 
let listaNumerosSorteados = [];

// VARIÁVEL QUE ARMAZENA O NÚMERO ALEATÓRIO 
let numeroSecreto = gerarNumeroAleatorio();

// VARIÁVEL QUE ARMAZENA O NÚMERO DE TENTATIVAS (inicialmente)
let tentativas = 1;

// JEITO "MAIS FÁCIL"

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto DOIS!';
//let pergunta = document.querySelector('p');
//pergunta.innerHTML = 'Escolha um número entre 1 e ' + numeroMaximo ': ';

// JEITO "MAIS COMPLEXO" - BOA PRÁTICA, EVITA REPETIÇÃO NO CÓDIGO
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    // TEXT TO SPEECH QUE NARRA OS TEXTOS (por algum motivo, ao carregar a página, ele apenas narra o título)
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

// FUNÇÃO PRA EXIBIR A MENSAGEM INICIAL AO CARREGAR A PÁGINA OU REINICIAR O JOGO
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto DOIS!');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroMaximo}: `);
}

exibirMensagemInicial();

// FUNÇÃO AO CLICAR NO BOTÃO DE "CHUTE"
function clicarChute() {
    let chute = document.querySelector('input').value;

    // MENSAGEM DE VITÓRIA E QUANTIDADE DE TENTATIVAS
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'VOCÊ ACERTOU!');

        let palavraTentativa = tentativas > 1 ? " tentativas!" : " tentativa!";

        let mensagemTentativas = `Parabéns! Você acertou em ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }

    // MANTER ASSIM AO INVÉS DE "ELSE IF" PARA EVITAR REPETIÇÃO DO CÓDIGO AO SOMAR AS TENTATIVAS E LIMPAR O CAMPO
    else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'QUASE!');
            exibirTextoNaTela('p', 'O número secreto é MENOR do que isso!');
        }

        else {
            exibirTextoNaTela('h1', 'QUASE!');
            exibirTextoNaTela('p', 'O número secreto é MAIOR do que isso!');
        }
        tentativas++;

        limparCampo();
    }    
}

// FUNÇÃO PRA GERAR UM NÚMERO ALEATÓRIO
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);

    // ESTRUTURA DE CONDIÇÃO PARA LIMPAR LISTA AO "GANHAR" O JOGO (todos os números já foram escolhidos)
    let qntdElementosLista = listaNumerosSorteados.length;
    if (qntdElementosLista == numeroMaximo) {
        alert("PARABÉNS! Você acertou TODOS os números! Jogue novamente!")
        listaNumerosSorteados = [];
    }
    
    // ESTRUTURA DE CONDIÇÃO PARA GERAR APENAS NÚMEROS QUE NUNCA FORAM ESCOLHIDOS 
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }

    else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);

        //RETURN = DEVOLVE UMA INFORMAÇÃO, NO CASO, O NÚMERO ESCOLHIDO
        return numeroEscolhido;
    }
}

// FUNÇÃO PARA LIMPAR O INPUT DE TENTATIVAS
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

// FUNÇÃO PRA REINICIAR O JOGO
function clicarNovoJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();

    document.getElementById('reiniciar').setAttribute('disabled', true);

    tentativas = 1;
}