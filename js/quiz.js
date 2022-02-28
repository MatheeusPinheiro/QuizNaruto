

    let questaoAtual = 0;
    let perguntaCorreta;

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



    }
}

 
 function proximaPergunta(e){
    let proxima = parseInt(e.target.getAttribute('data-op'));

    if(questoes[questaoAtual].resposta === proxima){
        perguntaCorreta++;
    }
    questaoAtual++;
    mostrarPergunta();
 }