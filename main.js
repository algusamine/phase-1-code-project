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

function getCrime(bias){
  console.log(bias)

// Filter out unique biasMotivation for the drop down list******

        let biasMotivation = [...new Set(bias.map(x => x.bias_motive_description))];
        //console.log(biasMotivation)
       
        //add event listener to select:
        document.querySelector('#motive-dropdown').addEventListener('change', (e)=>{
            //console.log(e.target.value)
            let crimeBias = bias.filter (function(crimeStat){
                if(e.target.value === crimeStat.bias_motive_description){
                    return true 
                }
            })
            //console.log(crimeBias)
         })
        biasMotivation.forEach((victim)=>{
            let option = document.createElement('option');
            option.name = victim;
            option.value = victim;
            option.textContent = victim;
            document.querySelector('#motive-dropdown').append(option)

         })
        

// filter by county**********

        let county = [...new Set(bias.map(x => x.county))];
        //console.log(county)
        
        //add event listener to selectCounty:
        document.querySelector('#county-dropdown').addEventListener('change', (e)=>{
            //console.log(e.target)
            let crimeCounty = bias.filter (function(crimeStat1){
                if(e.target.value === crimeStat1.county){
                    return true 
                }
            })
            //console.log(crimeCounty )
         })
        county.forEach((victimCounty)=>{
        let optionCounty = document.createElement('option');
        optionCounty.value = victimCounty;
        optionCounty.textContent = victimCounty;
        document.querySelector('#county-dropdown').append(optionCounty)

         })

// filter by law code category descriptoin****

        let assult = [...new Set(bias.map(x => x.law_code_category_description))];
        //console.log(county)
       
        //add event listener to selectAssult:
        document.querySelector('#assult-dropdown').addEventListener('change', (e)=>{
            //console.log(e)
            let crimeAssult = bias.filter (function(crimeStat2){
                if(e.target.value === crimeStat2.law_code_category_description){
                    return true 
                }
            })
           // console.log(crimeAssult)
            })
        assult.forEach((victimAssult)=>{
        let optionAssult = document.createElement('option');
        optionAssult.value = victimAssult;
        optionAssult.textContent = victimAssult;
        document.querySelector('#assult-dropdown').append(optionAssult)

        })

// filter by year********

        let year = [...new Set(bias.map(x => x.complaint_year_number))];
        //console.log(year)
       
        //add event listener to selectYear:
        document.querySelector('#year-dropdown').addEventListener('change', (e)=>{
           // console.log(e.target)
            let crimeYear = bias.filter(function(crimeStat3){
                if(e.target.value === crimeStat3.complaint_year_number){
                    return true 
                }
            })
           //console.log(crimeYear)
            })
        year.forEach((victimYear)=>{
        let optionYear = document.createElement('option');
        optionYear.value = victimYear;
        optionYear.textContent = victimYear;
        document.querySelector('#year-dropdown').append(optionYear)

         })
    
//Search button*****
         let search = document.createElement('button');
         search.type = 'button';
         search.className = 'search';
         search.textContent = 'Search';
         document.querySelector('#search').append(search);

         search.addEventListener('click', (e)=>{
             //console.log(e);
             let finalResult = bias.filter(function (crime){
                
                let keepResult = true;
                keepResult = (crime.bias_motive_description ===  document.querySelector('#motive-dropdown').value) && keepResult;
                keepResult = (crime.county === document.querySelector('#county-dropdown').value) && keepResult;
                keepResult = (crime.law_code_category_description === document.querySelector('#assult-dropdown').value) && keepResult;
                keepResult = (crime.complaint_year_number === document.querySelector('#year-dropdown').value) && keepResult;
            
                return keepResult;
             })
             //console.log(finalResult) 
             displayResults(finalResult)
         })

}

//Display results*************

function displayResults(finalCrimeResult){
    console.log(finalCrimeResult)
    let p = document.createElement('p');
    p.textContent = finalCrimeResult.length;
        if(p.textContent >= 2){
          p.textContent = `There were ${finalCrimeResult.length} hate crimes`
        } else if(p.textContent == 1){
          p.textContent = `There was ${finalCrimeResult.length} hate crime`
        } else if (p.textContent < 1){
            p.textContent = `There were no hate crimes for this selection`
        }
    p.style.backgroundColor = 'red';
    document.querySelector('#results').innerHTML = '';
    document.querySelector('#results').append(p);
}

