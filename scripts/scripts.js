const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Boreal é o mesmo que...",
    alternativaA : "Sul",
    alternativaB : "Leste",
    alternativaC : "Norte",
    correta      : "Norte",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Austral é o mesmo que...",
    alternativaA : "Oeste",
    alternativaB : "Sul",
    alternativaC : "Norte",
    correta      : "Sul",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Nascente é o mesmo que...",
    alternativaA : "Sul",
    alternativaB : "Leste",
    alternativaC : "Oeste",
    correta      : "Leste",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Poente é o mesmo que...",
    alternativaA : "Norte",
    alternativaB : "Leste",
    alternativaC : "Oeste",
    correta      : "Oeste",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "O Brasil se localiza em qual continente?",
    alternativaA : "África",
    alternativaB : "Europa",
    alternativaC : "América",
    correta      : "América",
}
const perguntas = [q0,q1,q2,q3,q4,q5]
let x = 0
let q = perguntas[x]
let placar = 0
let tentativas = 3


// ***********************



const montarPergunta= (q) => {
    tituloPergunta.textContent = q.pergunta
    alternativaA.textContent = q.alternativaA
    alternativaB.textContent = q.alternativaB
    alternativaC.textContent = q.alternativaC
    nQuestão.textContent = q.numQuestao + 1 
    qntQuestões.textContent = perguntas.length
    document.querySelector("#tentativas")
    .textContent = (`Tentativas: ${tentativas} 
    | Placar: ${placar}`)
    placar.textContent = placar
    
}
const verificar = (alternativa) => {
    x +=1
    if (alternativa.textContent === q.correta){
        placar +=10
        }else{        
        tentativas -=1
        if (tentativas === 0){
            alert(`Acabaram suas tentativas, seu placar foi : ${placar}`)
            resetar()
        }
    }
    
    if (x === 6){
        alert(`Parabéns, você respondeu todas as perguntas, seu placar foi : ${placar}`)
        resetar()
    }
    q = perguntas[x]
    montarPergunta(q)
}
const resetar = () =>{
    x = 0
    placar = 0
    tentativas = 3
    q = perguntas[x]
    montarPergunta(q)

}

montarPergunta(q)
