function calcular() {
    let pesoBobina = document.getElementById('peso');
    let select = document.getElementById('tamanho');
    let res = document.querySelector('#res');
    let polyester = document.getElementById('polyester');
    let espumada = document.getElementById('espumada');
    let option = select.options[select.selectedIndex];
    let valorLinear = (pesoBobina.value - 1.472) / 0.07384;
    let valorQuadrado = (pesoBobina.value - 1.472) / 0.246128;
    let valorLinearDois = (pesoBobina.value - 1.984) / 0.09868;
    let valorQuadradoDois = (pesoBobina.value - 1.984) / 0.2467;
    
    if (pesoBobina.value == "") {
            alert("Preencha todos os campos.");
    } else if (pesoBobina.value > 0) {
        if (option.value == 300 && polyester.checked) {
            res.value = valorQuadrado.toFixed(3) + " Metros quadrados\n" + valorLinear.toFixed(3) + " Metros linear";
        } else if (option.value == 400 && polyester.checked) {
            res.value = valorQuadradoDois.toFixed(3) + " Metros quadrados\n" + valorLinearDois.toFixed(3) + " Metros linear";;
        } else if (espumada.checked) {
            res.value = "Sinto muito, este dado ainda não está disponível.";
        } else {
            res.value = "";
            alert("Escolha um tamanho de fita."); 
        }
    } else {
        alert("O valor deve ser POSITIVO.");
    }

}

function resetar() {
    let select = document.getElementById('tamanho');
    let res = document.getElementById('res');
    let pesoBobina = document.getElementById('peso');
    let option = select.options[select.selectedIndex];
    let optionCheck = document.getElementsByName("tipoFita");

    select.value = "";
    res.value = "";
    pesoBobina.value = "";
    optionCheck.length;
    optionCheck[0].checked = true;
}