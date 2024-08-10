    // Aplicando máscara de moeda brasileira (R$) que aparece conforme o usuário digita
    Inputmask({
        alias: "numeric",
        groupSeparator: ".",
        radixPoint: ",",
        digits: 2,
        prefix: "R$ ",
        autoGroup: true,
        rightAlign: false,
        unmaskAsNumber: true,
        removeMaskOnSubmit: true
    }).mask(document.querySelectorAll("input"));

    document.getElementById('fuelForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let precoGasolina = parseFloat(document.getElementById('gasolina').inputmask.unmaskedvalue());
        let precoAlcool = parseFloat(document.getElementById('alcool').inputmask.unmaskedvalue());

        // Cálculo da proporção
        let proporcao = precoAlcool / precoGasolina;

        // Verificação
        let resultado = document.getElementById('resultado');
        if (proporcao < 0.7) {
            resultado.textContent = "É mais vantajoso abastecer com Álcool.";
            resultado.classList.remove("text-danger");
            resultado.classList.add("text-success");
        } else {
            resultado.textContent = "É mais vantajoso abastecer com Gasolina.";
            resultado.classList.remove("text-success");
            resultado.classList.add("text-danger");
        }
    });
