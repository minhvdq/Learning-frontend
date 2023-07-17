
//fetch the json file into an array
fetch('products.json')
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then( json => beginning(json) )
  .catch( err => console.error(`Fetch problem: ${err.message}`) );


// clearing nodes function 

function clearing(daddy){
    while (daddy.firstChild) {
        daddy.removeChild(daddy.lastChild);
    }
}

//display after have the json file
function beginning(product){
    const mn = document.querySelector("main");
    const btn = document.querySelector("button");
    const cat = document.querySelector("#cat");
    const srch = document.querySelector("#items");
    let category = [];
    let finalResults = [];
    finalResults = product;
    displayScreen();
    btn.addEventListener("click", sortItem);
    function sortItem(){

        let catVal = String(cat.value);
        let srchVal = String(srch.value).trim();
        clearing(mn);
        category = product.filter(item => String(item.type).toLowerCase() === catVal.toLowerCase());
        if(catVal === "All"){
            category = product;
        }
        finalResults = category.filter(item => String(item.name).includes(srchVal.toLowerCase()));

        displayScreen()
    }
    function displayScreen(){
        for(item of finalResults){
            let url = `images/${String(item.image)}`;
            const newItem = document.createElement("img");
            newItem.setAttribute("src", url);
            mn.appendChild(newItem);
        }
        if(finalResults.length === 0){
            const para = document.createElement("p");
            para.textContent = "No result Found";
            mn.appendChild(para);
        }
        //let p = category[0][image];
        //const para = document.createElement("p");
        //para.textContent = String(product[0].image);
        //mn.appendChild(para);
    }   
}

