let button = document.getElementById("decipher");
const downletter = "abcdefghijklmnopqrstuvwxyz";

button.addEventListener("click", () =>{
    let code = document.getElementById("code").value;
    let shift = Number(document.getElementById("shift").value);
    let deciphered = [];

    for(let i = 0; i < code.length; i++){
        let shiftedIndex = downletter.indexOf(code[i]) + shift;
        let shiftedLetter = downletter[shiftedIndex];
        deciphered.push(shiftedLetter);
    }
   alert(deciphered.join(""));
});
