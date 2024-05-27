const favList = document.querySelector('#search-results-list');
const FAVOURITES = 'favourites';
const container = document.querySelector('.container')


async function getFavData(ele){
    const url = "https://www.superheroapi.com/api.php/891370368026086";

    const res = await fetch(`${url}/${ele}`)
    const data = await res.json();
    DisplayFavData(data);
}

function DisplayFavData(e){
    const li = document.createElement('li');
    li.innerHTML = `
            <div class='result'>
                <img src=${e.image.url} alt=''>
                <div id='name'>
                    <p style="color:black">${e.name}</p>
                    <a href="details.html?id=${e.id}">More Info</a>
                </div>
                <button onclick="remove(${e.id})">Remove</button> 
            </div>`
    container.appendChild(li);
}

function getfavi(){
    return localStorage.getItem(FAVOURITES)? JSON.parse(localStorage.getItem(FAVOURITES)) : [];
}

function remove(heroId) {
    let favs = getfavi();
    favs = favs.filter(id => id !== heroId);
    localStorage.setItem(FAVOURITES, JSON.stringify(favs));
    renderAll();
}
function renderAll(){
    const favData = getfavi();
    favList.innerHTML = ''; // clear all previous data

    if(!favData || favData===0 ){
        favList.innerHTML='<li>No Data Present!</li>'
    }
    else{
        favData.map((e)=>{
            getFavData(e);
            
        })
        
    }
    
}
renderAll();

