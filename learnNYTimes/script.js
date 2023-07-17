//set variables

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = "ZhNzA07jhnnl057lOVspSYAM3GqGUQER";

const searchTerm = document.querySelector("#search");
const startDate = document.querySelector("#start-date");
const endDate = document.querySelector("#end-date");
const searchBtn = document.querySelector(".submit");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const form = document.querySelector("form");
const sc = document.querySelector("section");
const nav = document.querySelector("nav");

nav.style.display = 'none';


form.addEventListener("submit", submitItt);

let pageNumber;

//submitted function
function submitItt(e){
    pageNumber = 0;
    fetchData(e);

}

// get the json from url
function fetchData(e){
    e.preventDefault();


    let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}&fq=document_type:("article")`;
    if(startDate.value !== ""){
        url = `${url}&begin_date=${startDate.value}`;

    }
    if(endDate.value !== ""){
        url = `${url}&end_date=${endDate.value}`;
    }
    fetch(url)
    .then((response) => response.json())
    .then((json) => displayScreen(json))
    .catch((error) => console.error(`Error fetching data: ${error.message}`));
}

//display after pressing the submit
searchBtn.addEventListener("click", submitItt);

//display the results
function displayScreen(json){
    while(sc.firstChild){
        sc.removeChild(sc.firstChild);
    }
    const articles = json.response.docs;

    nav.style.display = articles.length === 10 ? "block" : "none";

    if(articles.length === 0){
        const ans = document.createElement("p");
        ans.textContent = "No result found";
        sc.appendChild(ans);
    }
    else{
        for(const art of articles){
            const atc = document.createElement("article");
            const headln = document.createElement("h2");
            const link = document.createElement("a");
            const image = document.createElement("img");
            const para = document.createElement("p")
            const keyword = document.createElement("p");
            

            console.log(art);


            link.textContent = art.headline.main;
            link.href = art.web_url;
            link.setAttribute("target", "_blank");
            para.textContent = art.snippet;
            keyword.textContent = "Keyword: ";
            keyword.classList.add("keywords");
            for(const thing of art.keywords){
                const sp = document.createElement("span");
                sp.textContent = `${thing.value}`;
                keyword.appendChild(sp);
            }
            if(art.multimedia.length > 0){
                image.src = `http://www.nytimes.com/${art.multimedia[0].url}`;
                image.alt = art.headline.main; 
            }
            headln.appendChild(link);
            atc.appendChild(headln);
            atc.appendChild(image);
            atc.appendChild(para);
            atc.appendChild(keyword);
            sc.appendChild(atc);
        }
    }
}


//next and prev page buttons
prevBtn.addEventListener("click", prevFunction);
function prevFunction(e){
    if(pageNumber >0 ){
        pageNumber --;
        fetchData(e);
    }
    else{
        return;
    }
}
nextBtn.addEventListener("click", nextFunction);

function nextFunction(e){
    pageNumber ++;
    fetchData(e);
}