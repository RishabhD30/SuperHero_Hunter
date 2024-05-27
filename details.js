function getData(param){
    const url = new URLSearchParams(window.location.search);
    return url.get('id')
}
const hello = async function(id){
    const url="https://www.superheroapi.com/api.php/891370368026086";
    const res = await fetch(`${url}/${id}`);
    const data = await res.json();
    getDetails(data);
}

function getDetails(data){
    // const url="https://www.superheroapi.com/api.php/891370368026086";
    // $.get(`${url}/${id}`,function(data)
    {
        $('#my-container').append(`
    
        <div id="details">
        <h1 id="more-details">More about the superhero</h1>
        <img src="${data.image.url}">
        
        <h1>${data.name}</h1>
        <h2>${data.biography['full-name']}</h2>
        <h2> Intelligence : ${data.powerstats.intelligence}</span>
        <h2> Strength : ${data.powerstats.strength}</h2>
        <h2>Speed : </span> <span> ${data.powerstats.speed}</h2>
        <h2> Durability: </span> <span> ${data.powerstats.durability}</h2>
        <h2>Power :</span> <span>${data.powerstats.power}</h2>
        <h2> Combat :</span> <span>${data.powerstats.combat}</h2>
        </div>`
        );
    };  
}


const heroId = getData('id');
// getDetails(heroId);
hello(heroId)





