const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */
const imName = [];
for(let i = 1; i <= 5; i++){
    const name = `images/pic${i}.jpg`;
    imName.push(name);
}
for(const file of imName){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', file );
    newImage.setAttribute('alt', "file");
    thumbBar.appendChild(newImage);
}
/* Wiring up the Darken/Lighten button */
thumbBar.addEventListener('click',(event) => {
    const a = event.target.getAttribute("src");
    displayedImage.setAttribute("src", a);
    
});
btn.addEventListener('click', (e) => {
    const x = btn.getAttribute("class"); 
    if(x === "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor ="rgb(0,0,0,0.5)";
    }
    else{
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0,0,0,0)";
    }
});
