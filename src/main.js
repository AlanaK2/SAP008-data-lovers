import {computerStats, filterData, sortData, difficultyFilter} from "./data.js";
import data from './data/lol/lol.js';
let arrayCampeoes = Object.values(data.data);

const btnSobre = document.querySelector('#btn-sobre');
const main = document.querySelector("#main-content");
const modal = document.querySelector("#modal");
const cards = document.querySelector('#cards');

btnSobre.addEventListener('click', function(){
    modal.style.display = 'flex';
    main.style.display = 'none';
    cards.style.display = 'none';
})

const btnVoltar = document.querySelector('#btn-voltar');
btnVoltar.addEventListener('click', function(){
    main.style.display = 'flex';
    modal.style.display = 'none';
    cards.style.display = 'none';
})

const voltarFooter = document.querySelector('#voltar-footer');
voltarFooter.addEventListener('click', function(){
    modal.style.display = 'flex';
    main.style.display = 'none';
    cards.style.display = 'none'
})

const btnIniciar = document.querySelector('#iniciar');
btnIniciar.addEventListener('click', function(){
    main.style.display = 'none';
    cards.style.display = 'flex';
})

function printCards(lol) {
    document.getElementById('cardzinho').innerHTML = lol.map((item) => `    
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="${item.splash}">
                    <h2>${item.name}</h2>
                </div>
                <div class="flip-card-back">
                    <ul style="list-style: none">
                        <li>ATAQUE: ${item.info.attack}</li>
                        <li>DEFESA: ${item.info.defense}</li>
                        <li>MAGIA: ${item.info.magic}</li>
                        <li>DIFICULDADE: ${item.info.difficulty}</li>
                    </ul>
                    <h2>${item.name}</h2>
                </div>
            </div>
        </div>
        `).join('')
}  

window.addEventListener('load', () => printCards(arrayCampeoes));

const selectDifficulty= document.querySelector('#dificuldade');
function searchByDifficulty(e) {
    const result = difficultyFilter(arrayCampeoes,e.target.value);
    const tamTotal= arrayCampeoes.length;
    let tamResult= result.length;
    document.getElementById('frase').innerHTML = 
    `Curiosidade: Os campeões exibidos correspondem a ${computerStats(tamResult,tamTotal)} % do total de campeões.`
    return printCards(result);
}
selectDifficulty.addEventListener('change',searchByDifficulty);

const selectTag = document.querySelector('#funcao');
selectTag.addEventListener('change', function() {
    const valorSelecionado = selectTag.value;
    let arrayCampeoesFiltrados = filterData(arrayCampeoes, valorSelecionado);
    printCards(arrayCampeoesFiltrados)
    computerStats(valorSelecionado, arrayCampeoesFiltrados)
})

const selectAZ = document.querySelector('#sort');
selectAZ.addEventListener('change', function() {
    const sortSelecionado = selectAZ.value;
    const ordem = sortData(arrayCampeoes,sortSelecionado);
    printCards(ordem)
})