const input  = document.querySelector("input");
const btn  = document.querySelector("button");
const result = document.querySelector("p");
const contacts = [
    "Chris:2232322",
    "Sarah:3453456",
    "Bill:7654322",
    "Mary:9998769",
    "Dianne:9384975",
  ];
input.focus();
const name = [];
const phone = [];
for(const str of contacts){
    const x = str.split(":");
    name.push(x);
    x[0] = x[0].toLowerCase();
}
function run(){
    const val = input.value;
    if (val != '') {
        let check = false;
        for(const n of name){
            gtr = val.toLowerCase();
            if(gtr == n[0]){
                result.textContent = `${gtr} phone number is ${n[1]}`;
                check = true;
                break;
            }
        }
        if(check == false){
            result.textContent = "No User Found !"; 
        }
        input.focus();
    }
    else{
        result.textContent = "Give me a f*cking name !!";
    }
}
btn.addEventListener('click', run);