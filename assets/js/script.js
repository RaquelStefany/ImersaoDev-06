var Raquel = {
    nome: "Raquel",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
};

var Douglas = {
    nome: "Douglas",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
};

var Bruna = {
    nome: "Bruna",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
};

var jogadores = [Raquel, Douglas, Bruna];

function calculaPontos(jogador){
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}

Raquel.pontos = calculaPontos(Raquel);
Douglas.pontos = calculaPontos(Douglas);
Bruna.pontos = calculaPontos(Bruna);

function exJogadoresTela(jogadores){
    var elemento = "";

    for(var i = 0; i < jogadores.length; i++){
        elemento += `<tr>
                        <td>
                            ${jogadores[i].nome}
                        </td>
                        <td>
                            ${jogadores[i].vitorias}
                        </td>
                        <td>
                            ${jogadores[i].empates}
                        </td>
                        <td>
                            ${jogadores[i].derrotas}
                        </td>
                        <td>
                            ${jogadores[i].pontos}
                        </td>
                        <td>
                            <button onClick="adicionarVitoria(${i})" class="vitoria">
                                Vitória
                            </button>
                        </td>
                        <td>
                            <button onClick="adicionarEmpate(${i})" class="empate">
                                Empate
                            </button>
                        </td>
                        <td>
                            <button onClick="adicionarDerrota(${i})" class="derrota">
                                Derrota
                            </button>
                        </td>
                    </tr>`;
    }
        
    const tableJogadores = document.querySelector("#tabelaJogadores");
    tableJogadores.innerHTML = elemento;

}

exJogadoresTela(jogadores);

function adicionarVitoria(i){
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exJogadoresTela(jogadores);
}

function adicionarEmpate(i){
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exJogadoresTela(jogadores);
}

function adicionarDerrota(i){
    var jogador = jogadores[i];
    jogador.derrotas++;
    exJogadoresTela(jogadores);
}

function zerarPlacar(){
    Raquel.vitorias = 0;
    Raquel.empates = 0;
    Raquel.derrotas = 0;
    Raquel.pontos = 0;

    Douglas.vitorias = 0;
    Douglas.empates = 0;
    Douglas.derrotas = 0;
    Douglas.pontos = 0;

    Bruna.vitorias = 0;
    Bruna.empates = 0;
    Bruna.derrotas = 0;
    Bruna.pontos = 0;
    exJogadoresTela(jogadores);
}