function calcular() {
    let select = document.getElementById('tamanhoFita');
    let res = document.getElementById('res');
    let pesoBobina = document.getElementById('pesoBobina');
    let polyester = document.getElementById('polyester');
    let option = select.options[select.selectedIndex];
    let valorLinear = (pesoBobina.value - 1.472) / 0.07384;
    let valorQuadrado = (pesoBobina.value - 1.472) / 0.246128;
    let valorLinearDois = (pesoBobina.value - 1.984) / 0.09868;
    let valorQuadradoDois = (pesoBobina.value - 1.984) / 0.2467;

    if (option.value == 300 && polyester.checked) {
        res.value = valorQuadrado.toFixed(3) + " metros quadrados\n" + valorLinear.toFixed(3) + " metros linear";
    } else if (option.value == 400 && polyester.checked) {
        res.value = valorQuadradoDois.toFixed(3) + " metros quadrados\n" + valorLinearDois.toFixed(3) + " metros linear";;
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