let Chave = "82a5b32c2065e79c773e5d2ab59f34ec"

function colocarnatela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "umidade " + dados.main.humidity + "%"

}

async function buscarcidade(cidade) {

    let dados = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + 
    cidade + '&appid=82a5b32c2065e79c773e5d2ab59f34ec&units=metric')
        .then((resposta) => resposta.json())
    
        colocarnatela(dados)
}

function cliqueinobotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarcidade(cidade)
}

