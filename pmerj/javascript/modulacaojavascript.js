$('body').css('display','block');
var blurOn = 0;
const codigoJavascript = `
<div class="question" id="questao1">
<span>Nome &amp; Id do Oficial Aluno: Exemplo("Fulano | 123")</span><br>
<input type="text" id="conscrito" placeholder="Digite sua Resposta">
</div>
<!-- Perguntas -->
<div class="question">
<span><strong>1)</strong> Considerando os conceitos abordados na aula teórica sobre modulação, quem é o principal responsável por realizar a modulação dentro da viatura?</span><br>
<label><input type="radio" class="resposta1" name="resposta1" value="a" data-correta="true"> 01</label><br>
<label><input type="radio" class="resposta1" name="resposta1" value="b"> 02</label><br>
<label><input type="radio" class="resposta1" name="resposta1" value="c"> 03</label><br>
<label><input type="radio" class="resposta1" name="resposta1" value="d"> 04</label><br>
</div>
<div class="question">
<span><strong>2)</strong> Com base na questão anterior, assinale a alternativa correta para a modulação de Acompanhamento de Código 01, positivo?</span><br>
<label><input type="radio" class="resposta2" name="resposta2" value="a"> Zero, Iniciando um acompanhamento a um PANTO preto, tripulado vezes 2, o mesmo desobedeceu ordem de parada, vaga para mais 2 prefixos.</label><br>
<label><input type="radio" class="resposta2" name="resposta2" value="b"> Maré Zero, Duster da PMERJ, iniciando um acompanhamento padrão, nas proximidades do vanilla a um PANTO preto, vezes 2, o mesmo desobedeceu a ordem legal emanada por nossa viatura, vaga para mais 2 prefixos.</label><br>
<label><input type="radio" class="resposta2" name="resposta2" value="c" data-correta="true"> Maré Zero, Amarok da RECOM, iniciando um acompanhamento de código 1, a um PANTO preto tripulado vezes 2, o mesmo desobedeceu ordem de parada na localidade do posto do china e segue no sentido monumento chinês, vaga para mais 2 prefixos, positivo?</label><br>
<label><input type="radio" class="resposta2" name="resposta2" value="d"> QAP, Maré Zero, iniciando um acompanhamento de código 1 a um hysubaru preto o mesmo atirou contra a guarnição e segue monumento chinês.</label><br>
</div>
<div class="question">
<span><strong>3)</strong> Com base no que foi passado na apostila, como devo utilizar o Chat de Texto (PD). Assinale a alternativa incorreta.</span><br>
<label><input type="radio" class="resposta3" name="resposta3" value="a"> Para Informar a minha entrada de serviço à rede.</label><br>
<label><input type="radio" class="resposta3" name="resposta3" value="c"> Passar informação de um carro furtado.</label><br>
<label><input type="radio" class="resposta3" name="resposta3" value="b"> Solicitar um batalhão/oficial para patrulhar.</label><br>
<label><input type="radio" class="resposta3" name="resposta3" value="d" data-correta="true"> Após morrer em uma ação, informar no /PD as características de quem o matou ou passar alguma informação.</label><br>
</div>
<div class="question">
<span><strong>4)</strong> Complete a lacuna abaixo:<br><br> Maré Zero, Solicito ________ a minha ________, ______ ao estacionamento vermelho, correto.</span><br>
<label><input type="radio" class="resposta4" name="resposta4" value="b"> Prioridade, Viatura, Perto.</label><br>
<label><input type="radio" class="resposta4" name="resposta4" value="c"> Uma Fox, Guarnição, Próximo.</label><br>
<label><input type="radio" class="resposta4" name="resposta4" value="a" data-correta="true"> Apoio, Guarnição, Próximo.</label><br>
<label><input type="radio" class="resposta4" name="resposta4" value="d"> Prioridade, Guarnição, Próximo.</label><br>
</div>
<div class="question">
<span><strong>5)</strong> Em um acompanhamento em uma rodovia, qual unidade tem prioridade na <strong>Modulação</strong>.</span><br>
<label><input type="radio" class="resposta5" name="resposta5" value="a"> MOTO PATRULHA/BATEDORES</label><br>
<label><input type="radio" class="resposta5" name="resposta5" value="b" data-correta="true"> GAM</label><br>
<label><input type="radio" class="resposta5" name="resposta5" value="c"> BOPE</label><br>
<label><input type="radio" class="resposta5" name="resposta5" value="d"> RECOM</label><br>
<label><input type="radio" class="resposta5" name="resposta5" value="d"> PRF</label><br>
<label><input type="radio" class="resposta5" name="resposta5" value="d"> CORE</label><br>
</div>
<div class="question">
<span><strong>6)</strong> Em situações de ação de rua e estratégia de incursão, o ______ será responsável por todo o andamento da situação e modulação.</span><br>
<label><input type="radio" class="resposta6" name="resposta6" value="a"> MOTO PATRULHA/BATEDORES</label><br>
<label><input type="radio" class="resposta6" name="resposta6" value="b"> GAM</label><br>
<label><input type="radio" class="resposta6" name="resposta6" value="c" data-correta="true"> BOPE</label><br>
<label><input type="radio" class="resposta6" name="resposta6" value="d"> RECOM</label><br>
<label><input type="radio" class="resposta6" name="resposta6" value="d"> PRF</label><br>
<label><input type="radio" class="resposta6" name="resposta6" value="d"> CORE</label><br>
</div>
<div class="question">
<span><strong>7)</strong> Caso em um acompanhamento, todas as viaturas da ocorrência já estejam com visual do veículo o que eu, como modulador, devo fazer?</span><br>
<input type="text" class="resposta9" name="resposta9" placeholder="Digite sua resposta"> <br>
</div>
<div class="question">
<span><strong>8)</strong> Descreva quais os erros nessa modulação: Explique os Erros.</span><br>
<audio src="../audio/modulacao.m4a" controls></audio><br>
<input type="text" class="resposta10" name="resposta10" placeholder="Digite sua resposta"> <br>
</div>
<!-- Adicione as perguntas restantes -->
<!-- ... -->
<button id="checkavaliacao" onclick="finalizar()">Finalizar Avaliação</button>
`;


            document.getElementById('questionnaire').innerHTML = codigoJavascript;
            function mostrarBarrosinhoOn() {
                document.getElementById("barrosinhooff").classList.add("hidden");
                document.getElementById("barrosinhoOn").classList.remove("hidden");
            }
            
            function esconderBarrosinhoOn() {
                document.getElementById("barrosinhoOn").classList.add("hidden");
                document.getElementById("barrosinhooff").classList.remove("hidden");
            }
            
            function finalizar() {
                const nome = document.getElementById("conscrito").value;
                const resposta9 = document.querySelector(".resposta9").value; 
                const resposta10 = document.querySelector(".resposta10").value;
                let respostasCorretas = 0;
                
                for (let i = 1; i <= 10; i++) { 
                    const respostas = document.querySelectorAll('input[name="resposta' + i + '"]:checked');
                    respostas.forEach(resposta => {
                        if (resposta.dataset.correta === "true") {
                            respostasCorretas++;
                        }
                    });
                }
                const status = respostasCorretas >= 4 ? "Aprovado" : "Reprovado";
                
                const dataAtual = new Date();
                const dia = String(dataAtual.getDate()).padStart(2, '0');
                const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
                const ano = dataAtual.getFullYear();
                const horas = String(dataAtual.getHours()).padStart(2, '0');
                const minutos = String(dataAtual.getMinutes()).padStart(2, '0');
                
                const mensagem = `
                **Avaliação Modulação - Data: ${dia}/${mes}/${ano} | Horário: ${horas}:${minutos}**
                > 🆔 Nome: ${nome}
                > 📈 Total de Acertos: ${respostasCorretas}
                > 📊 Status: **${status}**
                > 
                > 💭 Questão 9: ${resposta9}
                > 💭 Questão 10: ${resposta10}
                `;
                
                
                const webhookURL = "https://discord.com/api/webhooks/1201331533382955138/0SFC_CvjLFYzE-0LmpTmsfB7-2eTvP8EMuADCS8_47AncLnE04unIdvtY6olQ894jZGM";
                const data = {
                    content: mensagem
                };
                
                fetch(webhookURL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao enviar o webhook para o Discord');
                    }
                    var meuAudio = document.getElementById('meuAudio');
                    meuAudio.play();
                    alert("Sua prova foi enviada com sucesso. Agora, nossos instrutores irão avaliá-la. Agradecemos seu empenho e boa sorte!")
                    window.close(); 
                })
                .catch(error => {
                    console.error('Erro:', error);
                    alert('Ocorreu um erro ao finalizar a avaliação.');
                });
    }
    function formatTime(minutes, seconds) {
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    function updateTimer() {
        let timerDisplay = document.getElementById('timer');
        let timeLeft = timer;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        
        timerDisplay.textContent = formatTime(minutes, seconds);
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Tempo esgotado";
            finalizar();
        } else {
            timer--;
        }
    }
    
    let timer = 900; // 15 minutos
    
    let timerInterval = setInterval(updateTimer, 1000);
    

function bloquearCliqueDireito(event) {
    event.preventDefault();
}
function bloquearTeclaControl(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}
document.addEventListener("contextmenu", bloquearCliqueDireito);
document.addEventListener("keydown", bloquearTeclaControl);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").classList.remove("scroll-to-top-btn-hide");
    document.getElementById("scrollToTopBtn").classList.add("scroll-to-top-btn-show");
  } else {
    document.getElementById("scrollToTopBtn").classList.remove("scroll-to-top-btn-show");
    document.getElementById("scrollToTopBtn").classList.add("scroll-to-top-btn-hide");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function closeWindowOnBlur() {
    const nome = document.getElementById("conscrito").value;
    const webhookURLFechou = "https://discord.com/api/webhooks/1203177588843872266/ypWaMDqVvhmAOUb81sohRu52ocFmJkonedz_U_hhNXJb5JYQ-omUvwuYnbY9gnE73xrc";
    const data = {
        content: nome + " | FECHOU A PROVA DE MODULAÇÂO"
    };
    
    fetch(webhookURLFechou, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar o webhook para o Discord');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao finalizar a avaliação.');
    });
    setTimeout(function() {
        if (blurOn == 1) {
            window.close();
        }
        blurOn = 1
    }, 1000); // 1000 milliseconds = 1 second, você pode ajustar esse valor conforme necessário
}
window.addEventListener('blur', closeWindowOnBlur);
function exibirInfos() {
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.forEach(function(usuario) {
        if (usuario && usuario.nome && usuario.pontos !== undefined) {
            console.log("Nome: " + usuario.nome + ", Pontos: " + usuario.pontos);
            document.getElementById('conscrito').value = usuario.nome + " | " + usuario.passaporte;
            var letraInicial = usuario.nome.charAt(0).toUpperCase();
            var nomeCapitalizado = letraInicial + usuario.nome.slice(1);
            document.getElementById('perfil').innerHTML = nomeCapitalizado.charAt(0).toUpperCase();
        }
    });
}
exibirInfos();
