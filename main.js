document.addEventListener('DOMContentLoaded', ()=>{
    fetchCrimes()
})

function fetchCrimes(){
    fetch('https://data.cityofnewyork.us/resource/bqiq-cu78.json')
    //fetch('https://data.cityofnewyork.us/resource/bqiq-cu78.json?bias_motive_description=ANTI-FEMALE LESBIAN (GAY)')
    .then(resp => resp.json())
    //.then(json => json.forEach(getCrime))
    .then(data => {getCrime(data)})
}

function getCrime (bias){
  // console.log(bias)
   // Filter out unique biasMotivation
        let biasMotivation = [...new Set(bias.map(x => x.bias_motive_description))];
        //console.log(biasMotivation)
    // put the unique items on a drop down list and append them to a div
        let select = document.createElement('select')
        select.name = 'drop-down';
        select.id = 'drop-down';
        biasMotivation.forEach((vectim)=>{
        let option = document.createElement('option');
        option.value = 'val'
        option.textContent = vectim;
        select.append(option)

         })
    // append the div to the main div with the id Motive-Description
        document.querySelector('#Motive-Description').append(select);
        
  }
