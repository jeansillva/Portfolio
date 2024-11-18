document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push(nome);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    exibirUsuarios();

    document.getElementById("nome").value = "";
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
