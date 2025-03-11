function calcularMedia() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let reposicao = parseFloat(document.getElementById("reposicao").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(reposicao)) {
        resultado.innerHTML = "<p class='reprovado'>Por favor, preencha todas as notas corretamente.</p>";
        return;
    }

    // Substitui a menor nota pela de reposição, se for maior
    let notas = [nota1, nota2, nota3].sort((a, b) => a - b);
    if (reposicao > notas[0]) {
        notas[0] = reposicao;
    }

    // Calcula a média final
    let mediaFinal = (notas[0] + notas[1] + notas[2]) / 3;

    let mensagem = "";

    if (mediaFinal >= 7.0) {
        mensagem = `<p class='aprovado'>Aprovado! Média: ${mediaFinal.toFixed(2)}</p>`;
    } else if (mediaFinal < 5.0) {
        mensagem = `<p class='reprovado'>Reprovado! Média: ${mediaFinal.toFixed(2)}</p>`;
    } else {
        // Cálculo da nota necessária na prova final
        let notaNecessaria = 12 - mediaFinal;
        mensagem = `<p class='prova-final'>Prova Final! Média: ${mediaFinal.toFixed(2)}<br>Nota necessária na prova final: ${notaNecessaria.toFixed(2)}</p>`;
    }

    resultado.innerHTML = mensagem;
}
