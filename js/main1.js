const url = "https://www.superheroapi.com/api.php/891370368026086";
const input = document.querySelector('input');
const allSearches = document.querySelector('.search-results');
const form = document.querySelector('form')
const FAVOURITES = 'favourites';

function add(hero){
    if(!hero) return;

    const favvi = getfavi();
    favvi.push(hero);
    localStorage.setItem(FAVOURITES, JSON.stringify(favvi))
}

function getfavi(){
    return localStorage.getItem(FAVOURITES)? JSON.parse(localStorage.getItem(FAVOURITES)) : [];
}

const getData = async function(texted){
    const response = await fetch(`${url}/search/${texted}`);
    const data = await response.json();
    const results = data.results;
    fetchedData(results)
}

function fetchedData(res){
    allSearches.innerHTML='';
    res.map((e)=>{
        const li = document.createElement('li');
        li.innerHTML = `
            <div class='result'>
                <img src=${e.image.url} alt=''>
                <div id='name'>
                    <p style="color:black">${e.name}</p>
                    <a id="Infoo" href="details.html?id=${e.id}">More Info</a>
                </div>
                <button id="throwingID" onclick="add(${e.id})">Fav++</button>
            </div>`
            allSearches.appendChild(li)
    })
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    getData(input.value)
})
