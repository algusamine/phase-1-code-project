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
        select.addEventListener('change', (e)=>{
            //console.log(e.target.value)
            let crimeBias = bias.filter (function(crimeStat){
                if(e.target.value === crimeStat.bias_motive_description){
                    return true 
                }
            })
            console.log(crimeBias)
         })
        biasMotivation.forEach((victim)=>{
            let option = document.createElement('option');
            option.name = victim;
            option.value = victim;
            option.textContent = victim;
            select.append(option)

         })
        // append the div to the main div with the id Motive-Description
        document.querySelector('#Motive-Description').append(select);
        

// filter by county**********

        let county = [...new Set(bias.map(x => x.county))];
        //console.log(county)
        // put the county on a drop down list and append them to a div county
        let selectCounty = document.createElement('select')
        selectCounty.name = 'drop-down1';
        selectCounty.id = 'drop-down1';
        //add event listener to selectCounty:
        selectCounty.addEventListener('change', (e)=>{
            //console.log(e.target)
            let crimeCounty = bias.filter (function(crimeStat1){
                if(e.target.value === crimeStat1.county){
                    return true 
                }
            })
            console.log(crimeCounty )
         })
        county.forEach((victimCounty)=>{
        let optionCounty = document.createElement('option');
        optionCounty.value = victimCounty;
        optionCounty.textContent = victimCounty;
        selectCounty.append(optionCounty)

         })
        // append the div to the main div with the id county
        document.querySelector('#county').append(selectCounty);

// filter by law code category descriptoin****

        let felony = [...new Set(bias.map(x => x.law_code_category_description))];
        //console.log(county)
        // put the county on a drop down list and append them to a div felony
        let selectFelony = document.createElement('select')
        selectFelony.name = 'drop-down2';
        selectFelony.id = 'drop-down2';
        //add event listener to selectFelony:
        selectFelony.addEventListener('change', (e)=>{
            //console.log(e)
            let crimeFelony = bias.filter (function(crimeStat2){
                if(e.target.value === crimeStat2.law_code_category_description){
                    return true 
                }
            })
            console.log(crimeFelony)
            })
        felony.forEach((victimFelony)=>{
        let optionFelony = document.createElement('option');
        optionFelony.value = victimFelony;
        optionFelony.textContent = victimFelony;
        selectFelony.append(optionFelony)

        })
        // append the div to the main div with the id felony
        document.querySelector('#felony').append(selectFelony);

// filter by year********

        let year = [...new Set(bias.map(x => x.complaint_year_number))];
        //console.log(year)
        // put the year on a drop down list and append them to a div year
        let selectYear = document.createElement('select')
        selectYear.name = 'drop-down3';
        selectYear.id = 'drop-down3';
        //add event listener to selectYear:
        selectYear.addEventListener('change', (e)=>{
            //console.log(e)
            let crimeYear = bias.filter(function(crimeStat3){
                if(e.target.value === crimeStat3.complaint_year_number){
                    return true 
                }
            })
            console.log(crimeYear)
            })
        year.forEach((victimYear)=>{
        let optionYear = document.createElement('option');
        optionYear.value = victimYear;
        optionYear.textContent = victimYear;
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
            console.log(e.target)

        })


}
