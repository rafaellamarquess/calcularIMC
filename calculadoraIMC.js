

const IMC = () => {
const altura = document.querySelector('#altura').value
const peso = document.querySelector('#peso').value
const nome = document.querySelector('#nome').value

const resultado = document.querySelector('#resultado')
const calcular = document.querySelector('#calcular')

calcular.addEventListener('click', IMC)

resultado.value = resultado



const calculoIMC = (peso / (altura * altura)).toFixed(1)

if (calculoIMC < 18.5){
    resultado.innerHTML = nome +  ", seu IMC é: " + calculoIMC + "! Você está abaixo do peso!"
    } else if(calculoIMC <25){
        resultado.innerHTML = nome + ", seu IMC é: " +  calculoIMC + "! Você está com peso ideal!"
    } else if(calculoIMC <30){
        resultado.innerHTML = nome +  ", seu IMC é: " + calculoIMC + "! Você está acima do peso!"
    } else if(calculoIMC <35){
        resultado.innerHTML = nome +  ", seu IMC é: " + calculoIMC + "! Você está muito acima do peso!"
    }else if(calculoIMC <40){
        resultado.innerHTML = nome +  ", seu IMC é: " + calculoIMC + "! Você está com obesidade!"
    }else if(calculoIMC <45){
        resultado.innerHTML = nome + ", seu IMC é: " + calculoIMC + "! Você está com obesidade!"
    }

}