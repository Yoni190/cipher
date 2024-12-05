let button = document.getElementById("decipher");
let radioButtons = document.querySelectorAll('input[type="radio"]');

const downLetter = "abcdefghijklmnopqrstuvwxyz";
const capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const punc = ",./?;:'[{]}|`~!@#$%^&*()-_=+ "
let sign = 0;

//Check if left shift or right shift
radioButtons.forEach((button)=> {
    button.addEventListener("change", (event)=> {
        if(event.target.value == "right"){
            sign = 0;
        }
        else {
            sign = 1;
        }
    });
});

button.addEventListener("click", () =>{
    let code = document.getElementById("code").value;
    let shift = Number(document.getElementById("shift").value);
    let deciphered = [];

    for(let i = 0; i < code.length; i++){
        let shiftedIndex = 0;
        if(punc.includes(code[i])){
            deciphered.push(code[i]);
        }
        else{
            //Check if char is upper or lower case
            if(code[i] === code[i].toUpperCase()){
                shiftedIndex = sign == 0 ? capitalLetter.indexOf(code[i]) + shift : capitalLetter.indexOf(code[i]) - shift;
            }
            else{
                shiftedIndex = sign == 0 ? downLetter.indexOf(code[i]) + shift : downLetter.indexOf(code[i]) - shift;
            }
            //This makes the alphabet a loop
            if (shiftedIndex > 25){
                shiftedIndex -= 26;
            }
            else if(shiftedIndex < 0){
                shiftedIndex += 26;
            }
            let shiftedLetter = code[i] == code[i].toUpperCase() ? capitalLetter[shiftedIndex] : downLetter[shiftedIndex];
            deciphered.push(shiftedLetter);
        }
    }
   alert(deciphered.join(""));

});
