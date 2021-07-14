document.addEventListener('DOMContentLoaded', ()=>{
    fetchCrimes()
    //biasMotivationEvent()
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
        //add event listener to select:
        select.addEventListener('click', (e)=>{
            console.log(e)
            })
        biasMotivation.forEach((vectim)=>{
        let option = document.createElement('option');
        option.value = 'val'
        option.textContent = vectim;
        select.append(option)

         })
        // append the div to the main div with the id Motive-Description
        document.querySelector('#Motive-Description').append(select);
        

// filter by county**********

        let county = [...new Set(bias.map(x => x.county))];
        //console.log(county)
        // put the county on a drop down list and append them to a div county
        let selectCounty = document.createElement('select')
        selectCounty.name = 'drop-down3';
        selectCounty.id = 'drop-down3';
        //add event listener to selectCounty:
        selectCounty.addEventListener('click', (e)=>{
            console.log(e)
            })
        county.forEach((vectimCounty)=>{
        let optionCounty = document.createElement('option');
        optionCounty.value = 'val'
        optionCounty.textContent = vectimCounty;
        selectCounty.append(optionCounty)

         })
        // append the div to the main div with the id county
        document.querySelector('#county').append(selectCounty);

// filter by law code category descriptoin****

        let felony = [...new Set(bias.map(x => x.law_code_category_description))];
        //console.log(county)
        // put the county on a drop down list and append them to a div felony
        let selectFelony = document.createElement('select')
        selectFelony.name = 'drop-down3';
        selectFelony.id = 'drop-down3';
        //add event listener to selectFelony:
        selectFelony.addEventListener('click', (e)=>{
            console.log(e)
            })
        felony.forEach((vectimFelony)=>{
        let optionFelony = document.createElement('option');
        optionFelony.value = 'val'
        optionFelony.textContent = vectimFelony;
        selectFelony.append(optionFelony)

        })
        // append the div to the main div with the id felony
        document.querySelector('#felony').append(selectFelony);

// filter by year********

        let year = [...new Set(bias.map(x => x.complaint_year_number))];
        //console.log(year)
        // put the year on a drop down list and append them to a div year
        let selectYear = document.createElement('select')
        selectYear.name = 'drop-down2';
        selectYear.id = 'drop-down2';
        //add event listener to selectYear:
        selectYear.addEventListener('click', (e)=>{
            console.log(e)
            })
        year.forEach((vectimYear)=>{
        let optionYear = document.createElement('option');
        optionYear.value = 'val'
        optionYear.textContent = vectimYear;
        selectYear.append(optionYear)

         })
        // append the div to the main div with the id year
        document.querySelector('#year').append(selectYear);
    
//submit button*****
         
        let button = document.createElement('button');
        button.id = 'search';
        button.textContent = 'Search'
        document.querySelector('#search').append(button);
        // add eventListener to search button: 
        button.addEventListener('click', (e)=>{
            console.log(e)
            })


}

