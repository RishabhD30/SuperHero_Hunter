const url = "https://www.superheroapi.com/api.php/891370368026086";
const input = document.querySelector("#search-input");
const searchres = document.querySelector(".search-results");
const form = document.querySelector('form');


const getData = async function(textSearched){
    const response = await fetch(`${url}/search/${textSearched}`);
    const data = await response.json();
    const results = data.results;
    console.log(results);
    fetchedData(results);
}

function fetchedData(res){
    searchres.innerHTML=" ";
    res.map((e)=>{
        const li = document.createElement('li');
        li.innerHTML=`
            <div class="result">
                <img src=${e.image.url} alt="">
                <div id="name">
                    <p style="color:black">${e.name}</p>
                    <a href="details.html?id=${e.id}"> More Info </a>
                </div> 
                <button onclick="addFav(${e.id})">Fav++</button>
            </div>`;
            searchres.appendChild(li)

    })
}

form.addEventListener('submit',(e)=>{
    e.preventDefault(); 
    getData(input.value)
})

// Info.addEventListener("click",(e)=>{
//     e.preventDefault();
//     moreInfo(e.id);
// })