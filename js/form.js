document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let dataNascimento = document.getElementById("data-nascimento").value;
    let discord = document.getElementById("discord").value.trim();

    if (!nome) {
        alert("Por favor, insira seu nome completo.");
        return;
    }

    if (nome.length < 3) {
        alert("O nome deve ter pelo menos 3 caracteres.");
        return;
    }

    if (!dataNascimento) {
        alert("Por favor, insira sua data de nascimento.");
        return;
    }

    if (discord && !discord.match(/^.+#[0-9]{4}$/)) {
        alert("O nick do Discord deve estar no formato correto (ex.: usuario#1234).");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(nome);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    exibirUsuarios();

    document.getElementById("nome").value = "";
    document.getElementById("data-nascimento").value = "";
    document.getElementById("discord").value = "";
});

function exibirUsuarios() {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let listaUsuarios = document.getElementById("lista-usuarios");

    listaUsuarios.innerHTML = "";

    usuarios.forEach(function (nome) {
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = nome;
        listaUsuarios.appendChild(li);
    });
}


document.addEventListener("DOMContentLoaded", exibirUsuarios);
// localStorage.clear();
