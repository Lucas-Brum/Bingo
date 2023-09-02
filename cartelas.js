document.addEventListener("DOMContentLoaded", function () {
    const cartelaElement = document.getElementById("cartela");
    const gerarCartelaBtn = document.getElementById("gerar-cartela-btn");
    const limparCartelaBtn = document.getElementById("limpar-cartela-btn");

    gerarCartelaBtn.addEventListener("click", function () {
        cartelaElement.innerHTML = ""; // Limpa a cartela anterior
        
        const numerosCartela = gerarNumerosCartela();
        
        for (let i = 0; i < 25; i++) {
            const numeroCartelaDiv = document.createElement("div");
            if (i === 12) {
                numeroCartelaDiv.textContent = "";
                numeroCartelaDiv.className = "centro";
            } else {
                numeroCartelaDiv.textContent = numerosCartela.shift();
                numeroCartelaDiv.className = "numero";
                numeroCartelaDiv.addEventListener("click", function () {
                    numeroCartelaDiv.classList.toggle("marcado");
                });
            }
            cartelaElement.appendChild(numeroCartelaDiv);
        }
    });

    limparCartelaBtn.addEventListener("click", function () {
        const numerosMarcados = document.querySelectorAll(".marcado");
        numerosMarcados.forEach(function (numeroMarcado) {
            numeroMarcado.classList.remove("marcado");
        });
    });

    function gerarNumerosCartela() {
        const numeros = [];
        while (numeros.length < 24) {
            const numero = Math.floor(Math.random() * 75) + 1;
            if (!numeros.includes(numero)) {
                numeros.push(numero);
            }
        }
        return numeros;
    }
});

