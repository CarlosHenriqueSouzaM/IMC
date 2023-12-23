const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const imcText = document.getElementById("imcText")

    const calculo = () => {

    if (altura.value != '' && peso.value != ''){
        const imc = (peso.value/(altura.value*altura.value)).toFixed(2)
        var imcTexto = ''
        if (imc < 18.5){
            imcTexto = "Abaixo do peso"
        }else if (imc < 25){
            imcTexto = "  Peso ideal  "
        }else if (imc < 30){
            imcTexto = " Acima do peso"
        }else{
            imcTexto = "  Obesidade   "
        }
        imcText.innerHTML = `Seu IMC é ${imc} ${imcTexto}`
    }else{
        imcText.innerHTML = "Valor invalido"
    }

}