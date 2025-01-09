// NOTIFICAÇÃO/ALERTA NA TELA 
alert("Boas vindas ao JOGO DO NÚMERO SECRETO!");

// VARÍAVEIS
let chute;
let tentativas = 1;

let numeroMaximo = 500;

// MATH.RANDOM = FUNÇÃO QUE ALEATORIZA UM NÚMERO ENTRE 0 E 1 (mas pode ser alterada para aleatorizar números maiores)
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log("VALOR DO NÚMERO SECRETO: " + numeroSecreto);

// ESTRUTURA DE REPETIÇÃO
// Usado para repetir a pergunta até o usuário acertar o valor
while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e " + numeroMaximo + ": ");

    //CONSOLE.LOG: APENAS PARA TESTES, USUÁRIO NÃO VÊ - DEVE SEMPRE SER REMOVIDO DEPOIS (?)
    console.log("VALOR DO CHUTE: " + chute);

    // CONDIÇÕES
    // Usadas para determinar se houve um acerto ou erro (e em caso de erro, determinar se o número é menor ou maior do que o inserido)
    if (chute == numeroSecreto) {
        break;
    }

    else {
        if (chute < numeroSecreto) {
            alert("Você errou! Tente um NÚMERO MAIOR!");
        }

        else {
            alert("Você errou! Tente um NÚMERO MENOR!");
        }
    }
    tentativas++;
}

// OPERADOR TERNÁRIO 
// Comando que determina uso de plural ou singular no texto de vitória, dependendo de quantas tentativas foram realizadas
let palavraTentativa = tentativas > 1 ? "TENTATIVAS" : "TENTATIVA";

// OUTRA FORMA DE COLOCAR VALORES DE VARÍAVEIS NO TEXTO: 
alert(`Isso aí! Você descobriu o número secreto! - NÚMERO SECRETO: ${numeroSecreto} - EM ${tentativas} ${palavraTentativa}`); 


