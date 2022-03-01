

    let questaoAtual = 0;
    let perguntaCorreta = 0;

    document.querySelector('.scoreArea button').addEventListener('click', iniciarQuiz);
    mostrarPergunta();

    function mostrarPergunta() {
    if (questoes[questaoAtual]) {

        let audio = document.querySelector('.audio');
        audio.play();

        let q = questoes[questaoAtual];

        document.querySelector('.area').style.display = 'flex';

        document.querySelector('.pergunta').innerHTML = q.pergunta;


        let alternativasHtml = ''
        for(let i in q.alternativas){
            alternativasHtml+= `<div data-op=${i} class="opcao"><span>${parseInt(i)+1}</span> ${q.alternativas[i]}</div>`
        }

        document.querySelector('.opcoes').innerHTML = alternativasHtml;

    
        document.querySelectorAll('.opcoes .opcao').forEach(item =>{
                item.addEventListener('click', proximaPergunta);
        });

    }else {
        finishQuiz();
    }
}

 
 function proximaPergunta(e){
    let proxima = parseInt(e.target.getAttribute('data-op'));

    if(questoes[questaoAtual].resposta === proxima){
        perguntaCorreta++;
        
    }
   
    setTimeout(()=>{
        questaoAtual++;
        mostrarPergunta();
    },2000)
    
 }

 function finishQuiz(){
   

    let pontos = Math.floor((perguntaCorreta / questoes.length) * 100);

    if(pontos < 30){
        document.querySelector('.scoreText1').innerHTML = 'Você é fraco, te falta odio!!';
        document.querySelector('.scorePct').style.color = '#FF0000';
        document.querySelector('.scoreArea img').src = 'img/itachi.png';
    }else if(pontos >= 40 && pontos < 70) {
        document.querySelector('.scoreText1').innerHTML = 'Muito bom! Esse é seu jeito ninja :) ';
        document.querySelector('.scorePct').style.color = '#FFFF00';
    } else if(pontos >= 70) {
        document.querySelector('.scoreText1').innerHTML = 'WOW Você vai virar um Hokage, Tô certo!';
        document.querySelector('.scorePct').style.color = '#0D630D';
    }

    document.querySelector('.scorePct').innerHTML = `Acertou ${pontos}%`;
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questoes.length} questões e acertou ${perguntaCorreta}.`;


    document.querySelector('.principal').style.display = 'none';
    document.querySelector('.score').style.display = 'block';
   
 }

 function iniciarQuiz() {
    perguntaCorreta = 0;
    questaoAtual = 0;
    mostrarPergunta();
}
