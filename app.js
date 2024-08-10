// Aplicando máscara de moeda brasileira (R$)
Inputmask({
    alias: "currency",
    prefix: "R$ ",
    groupSeparator: ".",
    radixPoint: ",",
    digits: 2,
    autoUnmask: true,
    removeMaskOnSubmit: true
}).mask(document.querySelectorAll("input"));

document.getElementById('fuelForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let precoGasolina = parseFloat(document.getElementById('gasolina').inputmask.unmaskedvalue().replace(",", "."));
    let precoAlcool = parseFloat(document.getElementById('alcool').inputmask.unmaskedvalue().replace(",", "."));

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

