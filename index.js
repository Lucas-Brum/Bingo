document.addEventListener("DOMContentLoaded", function () {
    const cartelaElement = document.getElementById("cartela");
    const numeroSorteadoElement = document.getElementById("numero-sorteado");
    const sortearBtn = document.getElementById("sortear-btn");
    const bingoBtn = document.getElementById("bingo-btn");

    let numerosSorteados = [];

    sortearBtn.addEventListener("click", function () {
        if (numerosSorteados.length < 75) {
            let numeroSorteado;
            do {
                numeroSorteado = sortearNumero();
            } while (numerosSorteados.includes(numeroSorteado));
            
            numerosSorteados.push(numeroSorteado);
            numeroSorteadoElement.textContent = numeroSorteado;
        } else {
            alert("Todos os números já foram sorteados!");
        }
    });

    bingoBtn.addEventListener("click", function () {
        if (numerosSorteados.length > 0) {
            numerosSorteados = []; // Reinicie a lista de números sorteados
            numeroSorteadoElement.textContent = "-";
            alert("Bingo! Números reiniciados.");
        } else {
            alert("Nenhum número foi sorteado ainda.");
        }
    });

    function sortearNumero() {
        return Math.floor(Math.random() * 75) + 1;
    }
});
