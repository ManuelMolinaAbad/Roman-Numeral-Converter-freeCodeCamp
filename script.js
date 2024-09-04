"use strict"

const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertNumberToRoman = () =>{
  let numInput = numberInput.value;
  let numParsed = parseInt(numInput);
  let romanNumerals = [
    {key: 1000, value: 'M'},
    {key: 900, value: 'CM'},
    {key: 500, value: 'D'},
    {key: 400, value: 'CD'},
    {key: 100, value: 'C'},
    {key: 90, value: 'XC'},
    {key: 50, value: 'L'},
    {key: 40, value: 'XL'},
    {key: 10, value: 'X'},
    {key: 9, value: 'IX'},
    {key: 5, value: 'V'},
    {key: 4, value: 'IV'},
    {key: 1, value: 'I'}
];
  let romanNum = "";
  output.innerText = "";
  
  if(!numInput || !numInput.match(/\d/g)){
    output.innerText = "Please enter a valid number";
    return
  } else if(numParsed < 1){
    output.innerText = "Please enter a number greater than or equal to 1";
    return
  } else if(numParsed > 3999){
    output.innerText = "Please enter a number less than or equal to 3999";
    return
  } else {
    for (let i = 0; i < romanNumerals.length; i++) {
        while (numParsed >= romanNumerals[i].key) {
            romanNum += romanNumerals[i].value;
            numParsed -= romanNumerals[i].key;
        }
    }
    output.innerText = romanNum;
  }
}

convertBtn.addEventListener("click", () => {
  convertNumberToRoman()
})