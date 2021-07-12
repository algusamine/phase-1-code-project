console.log('Hello')
document.addEventListener('DOMContentLoaded', ()=>{
    fetchCurrencies()
})

function fetchCurrencies(){
    fetch('https://v6.exchangerate-api.com/v6/ddbfb6e33f56f0d2f8830407/latest/USD')
    .then(resp => resp.json())
    .then(json => console.log(json))
}

function getCurrencies(currency){
//console.log(currency)
}