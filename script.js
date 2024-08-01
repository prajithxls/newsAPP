
// const API_KEY="8ff90ebb2e7ba05b4a5646835e16612d";

// addon api
const API_KEY="6d5a5b5ee34fa2b383192475fb89f0d1"




const politics_btn=document.getElementById("politics")
const sport_btn=document.getElementById("sports");
const technology_btn=document.getElementById("technology")
const general_btn=document.getElementById("general")




sport_btn.addEventListener('click',fetchSportsNews)

technology_btn.addEventListener('click',fetchTechNews)

politics_btn.addEventListener('click',fetchPoliticsNews)

general_btn.addEventListener('click',fetchGeneralNews)



window.addEventListener('load' ,()=>fetchNews());

async function fetchGeneralNews(){
    sport_btn.style.color
    let url=`https://gnews.io/api/v4/top-headlines?category=health&lang=en&country=in&max=15&apikey=${API_KEY}`
    const res=await fetch(url);
    const data=await res.json();
    bindData(data.articles);
  }


async function fetchSportsNews(){
    sport_btn.style.color
    let url=`https://gnews.io/api/v4/top-headlines?category=sports&lang=en&country=in&max=15&apikey=${API_KEY}`
    const res=await fetch(url);
    const data=await res.json();
    bindData(data.articles);
  }

  async function fetchTechNews(){
    sport_btn.style.color
    let url=`https://gnews.io/api/v4/top-headlines?category=technology&lang=en&country=in&max=15&apikey=${API_KEY}`
    const res=await fetch(url);
    const data=await res.json();
    bindData(data.articles);
  }


  async function fetchPoliticsNews(){
    sport_btn.style.color
    let url=`https://gnews.io/api/v4/top-headlines?category=politics&lang=en&country=in&max=15&apikey=${API_KEY}`
    const res=await fetch(url);
    const data=await res.json();
    bindData(data.articles);
  }



async function fetchNews(){
    let url=`https://gnews.io/api/v4/search?category=world&q=example&lang=en&max=10&apikey=${API_KEY}`
    console.log("done");
    const res=await fetch(url)
    const data=await res.json();
    bindData(data.articles);
}


function bindData(data){
    console.log(200);
    const cardsContainer=document.getElementById('cards-container');
    const newsCardTemplate=document.getElementById('template-news-card');

    cardsContainer.innerHTML="";
    console.log(data)

    data.forEach(article =>{
    if(!article.image) return;
    const cardClone=newsCardTemplate.content.cloneNode(true);
    fillDataInCard(cardClone,article);
    cardsContainer.appendChild(cardClone);
   });
}

function fillDataInCard(cardClone,article){
    const newsImg=cardClone.querySelector('#news-image');
    const newsTitle=cardClone.querySelector('#news-title');
    const newsSource=cardClone.querySelector('#news-source');
    const newsDesc=cardClone.querySelector('#news-desc');

    newsImg.src=article.image;
    newsTitle.innerHTML=article.title;
    newsDesc.innerHTML=article.description;

    const date=new Date(article.publishedAt).toLocaleString("en-US", {
    timeZone:"Asia/Jakarta"});

    newsSource.innerHTML=`${article.source.name} . ${date}`;
    cardClone.firstElementChild.addEventListener('click', ()=> {
        window.open(article.url,"_blank");
    })

    
}























// const searchButton=document.getElementById('search-button');
// const searchText=document.getElementById('search-text');

// searchButton.addEventListener('click', ()=>{
//     const query=searchText.value;
//     if(!query) return;
//     fetchNews(query);
//     curSelectedNav?.classList.remove("active");
//     curSelectedNav=null;
// })