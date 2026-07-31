function mostrarNome() {
     let nome = document.getElementById("nome").value;

    document.getElementById("mensagem").innerText =
        "bem-vindo, " + nome + "!";
}