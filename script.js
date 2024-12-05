let button = document.getElementById("decipher");
let radioButtons = document.querySelectorAll('input[type="radio"]');
const labels = document.querySelector("#labels");
const container = document.querySelector("#container");
const decipherContainer = document.querySelector("#decipher-container");
const radioContainer = document.querySelector(".radio");
const label = document.createElement("label");
const decipheredCode = document.createElement("div");
const selection = document.querySelector("#cipher-techniques");
const shift_label = document.createElement("label");
const shift_input = document.createElement("input");
const right_label = document.createElement("label");
const left_label = document.createElement("label");
const right_input = document.createElement("input");
const left_input = document.createElement("input");

label.textContent = "Deciphered Code: "
decipheredCode.style.border = "2px solid black";
decipheredCode.style.padding = "5px";
decipheredCode.style.borderRadius = "5px";
decipheredCode.style.backgroundColor = "white";

const downLetter = "abcdefghijklmnopqrstuvwxyz";
const capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const punc = ",./?;:'[{]}|`~!@#$%^&*()-_=+ "
let sign = 0;

selection.addEventListener("change", ()=>{
    const index = selection.selectedIndex;
    if (index == 0){
        load_caesar();
    }
    else if (index == 1){
        load_rot13();
    }
});

function load_caesar(){
    
    shift_label.textContent = "Shift Factor: "
    shift_label.setAttribute("for", "shift");
    shift_label.id = "shift_label";
    
    shift_input.type = "number";
    shift_input.id = "shift";

    right_input.type = "radio";
    right_input.id = "right";
    right_input.value = "right"
    right_input.name = "shift";
    right_input.checked = true;

    right_label.textContent = "Right Shift"
    right_label.setAttribute("for", "right");
    right_label.className = "choice"

    left_input.type = "radio";
    left_input.id = "left";
    left_input.value = "left"
    left_input.name = "shift";
    
    left_label.textContent = "Left Shift"
    left_label.setAttribute("for", "left");
    left_label.className = "choice"

    labels.appendChild(shift_label);
    labels.appendChild(shift_input);
    radioContainer.appendChild(right_input);
    radioContainer.appendChild(right_label);
    radioContainer.appendChild(left_input);
    radioContainer.appendChild(left_label);
    
}

function load_rot13(){
    labels.removeChild(shift_label);
    labels.removeChild(shift_input);
    radioContainer.removeChild(right_label);
    radioContainer.removeChild(right_input);
    radioContainer.removeChild(left_label);
    radioContainer.removeChild(left_input);
}

//Check if left shift or right shift
radioButtons.forEach((radio)=> {
    radio.addEventListener("change", (event)=> {
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
    let shift = 0;
    let deciphered = [];
    if(selection.selectedIndex == 0){
        shift = Number(document.getElementById("shift").value);
    }
    else if(selection.selectedIndex == 1){
        shift = 13;
    }
    

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
   decipheredCode.textContent = deciphered.join("");
   decipherContainer.appendChild(label);
   decipherContainer.appendChild(decipheredCode);

});

load_caesar();