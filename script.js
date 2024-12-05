let button = document.getElementById("decipher");
const downLetter = "abcdefghijklmnopqrstuvwxyz";
const capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

button.addEventListener("click", () =>{
    let code = document.getElementById("code").value;
    let shift = Number(document.getElementById("shift").value);
    let deciphered = [];

    for(let i = 0; i < code.length; i++){
        let shiftedIndex = 0;
        if(code[i] == " "){
            deciphered.push(" ");
        }
        else{
            //Check if char is upper or lower case
            if(code[i] === code[i].toUpperCase()){
                shiftedIndex = capitalLetter.indexOf(code[i]) + shift;
            }
            else{
                shiftedIndex = downLetter.indexOf(code[i]) + shift;
            }
            //This makes the alphabet a loop
            if (shiftedIndex > 25){
                shiftedIndex -= 26;
            }
            let shiftedLetter = code[i] == code[i].toUpperCase() ? capitalLetter[shiftedIndex] : downLetter[shiftedIndex];
            deciphered.push(shiftedLetter);
        }
    }
   alert(deciphered.join(""));

});
