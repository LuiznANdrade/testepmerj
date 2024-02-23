function exibirUsuarios() {
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.forEach(function(usuario) {
        if (usuario && usuario.nome && usuario.pontos !== undefined) {
            console.log("Nome: " + usuario.nome + ", Pontos: " + usuario.pontos);
            document.getElementById('nickname').innerHTML = usuario.nome;
            document.getElementById('nickname2').innerHTML = usuario.nome;
            document.getElementById('points').innerHTML = "Points: " + usuario.pontos;
            if(usuario.unidade !== ""){
                $(".resgatar-codigo").css('display', 'none');
            } else {
                $(".resgatar-codigo").css('display', 'block');
            }
        }
    });
}
exibirUsuarios();