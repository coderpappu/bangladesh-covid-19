fetch('https://corona.lmao.ninja/v2/countries/bangladesh')
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                document.getElementById('TotalDeaths').innerHTML =data.deaths;
                document.getElementById('NewConfirmed').innerHTML =data.todayRecovered;
                document.getElementById('NewRecoverd').innerHTML =data.todayDeathes;
            })