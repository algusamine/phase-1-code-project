document.addEventListener('DOMContentLoaded', ()=>{
    fetchCrimes()
})

function fetchCrimes(){
    fetch('https://data.cityofnewyork.us/resource/bqiq-cu78.json')
    .then(resp => resp.json())
    .then(data => {
        getCrime(data)
    });
}

function getCrime (bias){
   console.log(bias)

   // Filter out unique biasMotivation******
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
    // append the div to the main div with the id year
        document.querySelector('#Motive-Description').append(select);

    // filter by year********
        let year = [...new Set(bias.map(x => x.complaint_year_number))];
        //console.log(year)
    // put the year on a drop down list and append them to a div year
        let selectYear = document.createElement('select')
        selectYear.name = 'drop-down2';
        selectYear.id = 'drop-down2';
        year.forEach((vectimYear)=>{
        let optionYear = document.createElement('option');
        optionYear.value = 'val'
        optionYear.textContent = vectimYear;
        selectYear.append(optionYear)
    // add an eventListner to select: 

         })
    // append the div to the main div with the id year
        document.querySelector('#year').append(selectYear);
    
        // filter by county**********

        let county = [...new Set(bias.map(x => x.county))];
        console.log(county)
    // put the county on a drop down list and append them to a div county
        let selectCounty = document.createElement('select')
        selectCounty.name = 'drop-down3';
        selectCounty.id = 'drop-down3';
        county.forEach((vectimCounty)=>{
        let optionCounty = document.createElement('option');
        optionCounty.value = 'val'
        optionCounty.textContent = vectimCounty;
        selectCounty.append(optionCounty)

         })
    // append the div to the main div with the id county
        document.querySelector('#county').append(selectCounty);

    //submit button*****
        let button = document.createElement('button');
        button.id = 'search';
        button.textContent = 'Search'
        document.querySelector('#search').append(button);
        
  }
