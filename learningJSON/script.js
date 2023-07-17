const head = document.querySelector("header");
const mainPage = document.querySelector("section");
async function take(){
    const reqURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const req = new Request(reqURL);
    const response = await fetch(req);
    const superHeroes = await response.json();
    createHeroes(superHeroes);
    createHeader(superHeroes);
}
function createHeader(obj){
    const squadName = document.createElement("h1");
    squadName.textContent = obj.squadName;
    head.appendChild(squadName);
    const des = document.createElement("p");
    des.textContent = `Hometown : ${obj.homeTown} // Formed : ${obj.formed}`;
    head.appendChild(des);

}
function createHeroes(objc){
    for(const hero of objc["members"]){
        const dude  = document.createElement("article");
        mainPage.appendChild(dude);
        const name  = document.createElement("h2");
        name.textContent = hero["name"];
        dude.appendChild(name);
        const identity = document.createElement("p");
        identity.textContent = `identity : ${hero["secretIdentity"]}`;
        dude.appendChild(identity);
        const age  = document.createElement("p");
        age.textContent = `age : ${hero["age"]}`;
        dude.appendChild(age);
        const powers = document.createElement("ul");
        powers.textContent = "superPowers";
        dude.appendChild(powers);
        const pws = hero["powers"];
        for(const pw of pws){
            const lt = document.createElement("li");
            lt.textContent = pw;
            powers.appendChild(lt);
        }
    }

}
take();