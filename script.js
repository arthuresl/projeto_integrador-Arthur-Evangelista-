/*
PROJETO: ARDA - Portal do Universo de Tolkien

TEMA:
Desafio interativo sobre personagens da Terra-média.

ENTRADAS:
Pontuação de 0 a 100 e escolha de personagem de 1 a 5.

PROCESSAMENTO:
Validar os dados, classificar a pontuação, identificar o personagem
com switch e percorrer a lista de personagens usando laços.

SAÍDAS:
Resultado apresentado na página com template literal e tabelas
de dados exibidas no console.

PSEUDOCÓDIGO:
1. Criar um array com cinco personagens e suas propriedades.
2. Solicitar a pontuação e validar a entrada.
3. Solicitar o personagem e validar a escolha.
4. Classificar a pontuação em três faixas.
5. Usar switch para identificar o personagem selecionado.
6. Percorrer os personagens com for e for...of.
7. Usar while para selecionar três recomendações.
8. Exibir o resultado e as tabelas de teste.

TESTE DE MESA — três execuções esperadas:
Pontuação | Escolha | Classificação       | Personagem
90        | 1       | Guardião da Terra-média | Gandalf
60        | 3       | Explorador          | Legolas
20        | 5       | Aprendiz            | Frodo

Os resultados acima correspondem às regras de classificação e às
opções definidas no código.
*/

// 1. ARRAY DE OBJETOS: cinco personagens com três propriedades.
const personagens = [
    { nome: "Gandalf", povo: "Maiar", perfil: "Sábio" },
    { nome: "Aragorn", povo: "Homens", perfil: "Rei" },
    { nome: "Legolas", povo: "Elfos", perfil: "Arqueiro" },
    { nome: "Gimli", povo: "Anões", perfil: "Guerreiro" },
    { nome: "Frodo", povo: "Hobbits", perfil: "Portador do Anel" }
];

// 2. ELEMENTOS DO HTML.
const botaoDesafio = document.querySelector("#iniciar-desafio");
const resultadoDesafio = document.querySelector("#resultado-desafio");

// 3. ENTRADA NUMÉRICA COM CONVERSÃO E VALIDAÇÃO.
function pedirNumero(mensagem, minimo, maximo) {
    const entrada = prompt(mensagem);

    // Verifica se o usuário cancelou.
    if (entrada === null) {
        return null;
    }

    // Verifica se a entrada está vazia.
    if (entrada.trim() === "") {
        alert("A entrada não pode ficar vazia.");
        return null;
    }

    // Converte a entrada para número.
    const numero = Number(entrada);

    // Verifica se a conversão resultou em um número inválido.
    if (Number.isNaN(numero)) {
        alert("Digite um número válido.");
        return null;
    }

    // Verifica se o número está dentro da faixa permitida.
    if (numero < minimo || numero > maximo) {
        alert(`Digite um número entre ${minimo} e ${maximo}.`);
        return null;
    }

    return numero;
}

// 4. FUNÇÃO PRINCIPAL DO DESAFIO.
function iniciarDesafio() {
    const pontuacao = pedirNumero(
        "Informe sua pontuação no desafio, de 0 a 100:",
        0,
        100
    );

    if (pontuacao === null) {
        return;
    }

    const escolha = pedirNumero(
        "Escolha um personagem:\n" +
        "1 - Gandalf\n" +
        "2 - Aragorn\n" +
        "3 - Legolas\n" +
        "4 - Gimli\n" +
        "5 - Frodo",
        1,
        5
    );

    if (escolha === null) {
        return;
    }

    // 5. IF / ELSE IF / ELSE: três faixas de classificação.
    let classificacao;

    if (pontuacao >= 80) {
        classificacao = "Guardião da Terra-média";
    } else if (pontuacao >= 40) {
        classificacao = "Explorador";
    } else {
        classificacao = "Aprendiz";
    }

    // 6. SWITCH: identifica o personagem escolhido.
    let personagemEscolhido;

    switch (escolha) {
        case 1:
            personagemEscolhido = personagens[0];
            break;

        case 2:
            personagemEscolhido = personagens[1];
            break;

        case 3:
            personagemEscolhido = personagens[2];
            break;

        case 4:
            personagemEscolhido = personagens[3];
            break;

        case 5:
            personagemEscolhido = personagens[4];
            break;

        default:
            alert("Opção inválida.");
            return;
    }

    // 7. FOR: percorre o array usando índices sem ultrapassar seus limites.
    const listaCompleta = [];

    for (let i = 0; i < personagens.length; i++) {
        listaCompleta.push({
            nome: personagens[i].nome,
            povo: personagens[i].povo,
            perfil: personagens[i].perfil
        });
    }

    // 8. FOR...OF: seleciona personagens recomendados.
    const recomendacoes = [];

    for (const personagem of personagens) {
        if (
            personagem.perfil === "Sábio" ||
            personagem.perfil === "Arqueiro" ||
            personagem.perfil === "Guerreiro"
        ) {
            recomendacoes.push(personagem.nome);
        }
    }

    // 9. WHILE: seleciona três recomendações.
    const recomendacoesFinais = [];
    let rodada = 0;

    while (rodada < 3) {
        recomendacoesFinais.push(recomendacoes[rodada]);
        rodada++;
    }

    // 10. TEMPLATE LITERAL: mostra o resultado na página.
    resultadoDesafio.textContent = `
Sua pontuação: ${pontuacao}/100
Classificação: ${classificacao}
Personagem escolhido: ${personagemEscolhido.nome}
Povo: ${personagemEscolhido.povo}
Perfil: ${personagemEscolhido.perfil}
Personagens recomendados: ${recomendacoesFinais.join(", ")}
    `;

    // 11. CONSOLE.TABLE: apresenta os dados dos personagens.
    console.table(listaCompleta);

    // 12. TESTE DE MESA: três casos com resultados esperados.
    const testes = [
        {
            pontuacao: 90,
            escolha: 1,
            classificacao: "Guardião da Terra-média",
            personagem: "Gandalf"
        },
        {
            pontuacao: 60,
            escolha: 3,
            classificacao: "Explorador",
            personagem: "Legolas"
        },
        {
            pontuacao: 20,
            escolha: 5,
            classificacao: "Aprendiz",
            personagem: "Frodo"
        }
    ];

    console.table(testes);
}

// 13. EVENTO DO BOTÃO DO DESAFIO.
if (botaoDesafio && resultadoDesafio) {
    botaoDesafio.addEventListener("click", iniciarDesafio);
}

// 14. MENU HAMBÚRGUER.
const botaoMenu = document.querySelector("#menu-toggle");
const menuPrincipal = document.querySelector("#menu-principal");

if (botaoMenu && menuPrincipal) {
    botaoMenu.addEventListener("click", () => {
        const aberto = menuPrincipal.classList.toggle("aberto");

        botaoMenu.setAttribute("aria-expanded", String(aberto));
    });

    // Fecha o menu depois de selecionar um link.
    menuPrincipal.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menuPrincipal.classList.remove("aberto");
            botaoMenu.setAttribute("aria-expanded", "false");
        });
    });
}

// 15. DROPDOWN: funciona com clique, teclado e hover via CSS.
const dropdown = document.querySelector(".dropdown");
const botaoDropdown = document.querySelector(".dropdown-toggle");

if (dropdown && botaoDropdown) {
    botaoDropdown.addEventListener("click", () => {
        const aberto = dropdown.classList.toggle("aberto");

        botaoDropdown.setAttribute("aria-expanded", String(aberto));
    });
}

// 16. LINK ATIVO: acompanha a seção indicada na URL.
function atualizarLinkAtivo() {
    const links = document.querySelectorAll(
        ".navegacao-principal a.nav-link"
    );

    const hashAtual = window.location.hash || "#inicio";

    links.forEach((link) => {
        const ativo = link.getAttribute("href") === hashAtual;

        link.classList.toggle("ativo", ativo);

        if (ativo) {
            link.setAttribute("aria-current", "location");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

window.addEventListener("hashchange", atualizarLinkAtivo);
atualizarLinkAtivo();
