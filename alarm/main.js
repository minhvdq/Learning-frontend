const button = document.querySelector("button");
const userName = document.querySelector(".name");
const delayTime = document.querySelector(".delay");
const output = document.querySelector(".op");

const name = userName.value;
const tm = delayTime.value;
let vl = Number(tm);
function alarm(vl, name){
    return new Promise((resolve, reject) => {
        if(vl < 0){
            throw new Error("Under zero");
        }
        setTimeout(() => {
            resolve(`Wake up ${name}!`);
        }, vl);
    });
}
button.addEventListener("click", () => {
    alarm(delayTime.value, userName.value)
    .then((messenger) => {
        output.textContent = messenger;
    })
    .catch((error) => {
        output.textContent = error;
    })
});