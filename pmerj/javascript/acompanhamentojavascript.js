var blurOn = 0
$('body').css('display','block');
function closeWindowOnBlur() {
    const nome = document.getElementById("conscrito").value;
    const webhookURLFechou = "https://discord.com/api/webhooks/1203177588843872266/ypWaMDqVvhmAOUb81sohRu52ocFmJkonedz_U_hhNXJb5JYQ-omUvwuYnbY9gnE73xrc";
    const data = {
        content: nome + " | FECHOU A PROVA DE ACOMPANHAMENTO"
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


const codigoJavascript = `
<div class="question" id="questao1">
<span>Nome &amp; Id do Oficial Aluno: Exemplo("Fulano | 123")</span><br>
<input type="text" id="conscrito" placeholder="Digite sua Resposta">
</div>
<!-- Perguntas -->
<div class="question">
<span><strong>1)</strong> Qual oficial dentro da viatura modula o acompanhamento?</span><br>
<label><input type="radio" class="resposta1" name="resposta1" value="a" data-correta="true"> P1 (02)</label><br>
<label><input type="radio" class="resposta1" name="resposta1" value="b"> P2 (01)</label><br>
<label><input type="radio" class="resposta1" name="resposta1" value="c">  P3 (03)</label><br>
</div>
<div class="question">
<span><strong>2)</strong> Quem assume a primaria durante acompanhamento a motos?</span><br>
<label><input type="radio" class="resposta2" name="resposta2" value="a"> Viatura primária</label><br>
<label><input type="radio" class="resposta2" name="resposta2" value="b"> Viatura secundária</label><br>
<label><input type="radio" class="resposta2" name="resposta2" value="c" data-correta="true"> Moto Patrulha/Batedores</label><br>
</div>
<div class="question">
<span><strong>3)</strong> Qual é a função da VTR terciária durante um acompanhamento?</span><br>
<label><input type="radio" class="resposta3" name="resposta3" value="a"> Prestar socorro em caso de capotamento</label><br>
<label><input type="radio" class="resposta3" name="resposta3" value="c" data-correta="true"> Auxiliar a primária e secundária em situações de acidente</label><br>
<label><input type="radio" class="resposta3" name="resposta3" value="b"> Assumir automaticamente a primária em caso de imprevisto</label><br>
</div>
<div class="question">
<span><strong>4)</strong> Em que situação é obrigatório retroceder/dar QTA durante um acompanhamento?</span><br>
<label><input type="radio" class="resposta4" name="resposta4" value="b" data-correta="true"> Capotamento da VTR</label><br>
<label><input type="radio" class="resposta4" name="resposta4" value="c"> Perder o visual</label><br>
<label><input type="radio" class="resposta4" name="resposta4" value="a"> Após 30 minutos de Acompanhamento</label><br>
</div>
<div class="question">
<span><strong>5)</strong> Quando é liberado o Código 5 no pneu durante um acompanhamento?</span><br>
<label><input type="radio" class="resposta5" name="resposta5" value="a"> Em qualquer situação de alta velocidade</label><br>
<label><input type="radio" class="resposta5" name="resposta5" value="b" data-correta="true"> Ao atropelar um cidadão e não prestar socorro</label><br>
<label><input type="radio" class="resposta5" name="resposta5" value="c"> Ao passar na praça ou G6</label><br>
</div>
<div class="question">
<span><strong>6)</strong> Qual é a condição para a utilização do Taser durante um acompanhamento?</span><br>
<label><input type="radio" class="resposta6" name="resposta6" value="a"> O indivíduo deve estar desembarcando de um veículo</label><br>
<label><input type="radio" class="resposta6" name="resposta6" value="b" data-correta="true"> O indivíduo deve oferecer risco e não respeitar as ordens legais</label><br>
<label><input type="radio" class="resposta6" name="resposta6" value="c"> O policial pode usar o Taser dentro da viatura</label><br>
</div>
<div class="question">
<span><strong>7)</strong> Caso haja acompanhamento de uma moto, qual procedimento está correto com base nos procedimentos a seguir: A ou B? Justifique.</span><br>
<img id="imageteste" style="margin-bottom: 25px;" width="100%" src="../img/teste.png">
<input type="text" class="resposta9" name="resposta9" placeholder="Digite sua resposta"> <br>
</div>
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
                document.getElementById('checkavaliacao').disabled = true;
                const nome = document.getElementById("conscrito").value;
                const resposta9 = document.querySelector(".resposta9").value; 
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
                `;
                
                
                const webhookURL = "https://discord.com/api/webhooks/1203177096503889920/U6Ui36zgC9dE7igw94jOBVR7LJVp-OI1hqhIAJfTHwL3kivICSiOaz8P9WoXHfCbDbqI";
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
        content: nome + " | FECHOU A PROVA DE ABORDAGEM"
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