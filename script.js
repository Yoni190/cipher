let button = document.getElementById("decipher");
const downLetter = "abcdefghijklmnopqrstuvwxyz";

button.addEventListener("click", () =>{
    let code = document.getElementById("code").value;
    let shift = Number(document.getElementById("shift").value);
    let deciphered = [];

    for(let i = 0; i < code.length; i++){
        if(code[i] == " "){
            deciphered.push(" ");
        }
        else{
            let shiftedIndex = downLetter.indexOf(code[i]) + shift;
            //This makes the alphabet a loop
            if (shiftedIndex > 25){
                shiftedIndex -= 26;
            }
            let shiftedLetter = downLetter[shiftedIndex];
            deciphered.push(shiftedLetter);
        }
    }
   alert(deciphered.join(""));

});
