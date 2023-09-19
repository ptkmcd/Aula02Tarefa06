document.addEventListener("DOMContentLoaded", function () {
    const calcularBotao = document.getElementById("calcular");

    calcularBotao.addEventListener("click", function () {
        const salario = parseFloat(document.getElementById("salario").value);

        if (isNaN(salario)) {
            alert("Por favor, insira um valor de salário válido.");
        } else {
            let percentual;
            let aumento;
            let novoSalario;

            if (salario <= 280) {
                percentual = 20;
            } else if (salario <= 700) {
                percentual = 15;
            } else if (salario <= 1500) {
                percentual = 10;
            } else {
                percentual = 5;
            }

            aumento = (salario * percentual) / 100;
            novoSalario = salario + aumento;

            alert(`Salário antes do reajuste: R$ ${salario.toFixed(2)}` +
                  `\nPercentual de aumento aplicado: ${percentual}%` +
                  `\nValor do aumento: R$ ${aumento.toFixed(2)}` +
                  `\nNovo salário, após o aumento: R$ ${novoSalario.toFixed(2)}`);
        }
    });
});