function calcular() {
    let select = document.getElementById('tamanhoFita');
    let res = document.getElementById('res');
    let pesoBobina = document.getElementById('pesoBobina');
    let option = select.options[select.selectedIndex];
    let valorLinear = (pesoBobina.value - 1.472) / 0.07384;
    let valorQuadrado = (pesoBobina.value - 1.472) / 0.246128;

    if (option.value == 300) {
        res.value = valorLinear.toFixed(3) + " metros linear" + valorQuadrado.toFixed(3) + " metros quadrados";
    } else if (option.value == 400) {
        res.value = 4;
    } else {
        res.value = ""; 
    }
}

function resetar() {
    let select = document.getElementById('tamanhoFita');
    let res = document.getElementById('res');
    let pesoBobina = document.getElementById('pesoBobina');
    let option = select.options[select.selectedIndex];

    select.value = "";
    res.value = "";
    pesoBobina.value = "";
}