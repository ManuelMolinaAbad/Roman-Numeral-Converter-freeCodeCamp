# Build a Roman Numeral Converter

## Description
This activity is focused on creating a Roman Numeral Converter project from scratch using HTML, CSS and JavaScript emphasising knowledge in the use of arrays with objects and the ways to deal with them. It is the second exercise to do be done in order to get the "JavaScript Algorithms and Data Structures" Certification by freeCodeCamp.org. 

## Roman Numeral Basic Guide
| Roman numerals | Arabic numerals |
| --- | --- |
| M |	1000 |
| CM | 900 |
| D | 500 |
| CD | 400 |
| C	| 100 |
| XC | 90 |
| L	| 50 |
| XL | 40 |
| X | 10 |
| IX | 9 |
| V | 5 |
| IV | 4 |
| I	| 1 |

## Requirements to be done in order to pass the automated tests
<details>
  <summary>List of all requirements: </summary>
  <br>

  1. You should have an input element with an id of "number"
  1. You should have a button element with an id of "convert-btn"
  1. You should have a div, span or p element with an id of output
  1. When you click on the #convert-btn element without entering a value into the #number element, the #output element should contain the text "Please enter a valid number"
  1. When the #number element contains the number -1 and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number greater than or equal to 1"
  1. When the #number element contains the number 4000 or greater and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number less than or equal to 3999"
  1. When the #number element contains the number 9 and the #convert-btn element is clicked, the #output element should contain the text "IX"
  1. When the #number element contains the number 16 and the #convert-btn element is clicked, the #output element should contain the text "XVI"
  1. When the #number element contains the number 649 and the #convert-btn element is clicked, the #output element should contain the text "DCXLIX"
  1. When the #number element contains the number 1023 and the #convert-btn element is clicked, the #output element should contain the text "MXXIII"
  1. When the #number element contains the number 3999 and the #convert-btn element is clicked, the #output element should contain the text "MMMCMXCIX"
</details>


## Automated Tests the project must pass
<details>
  <summary>List of all automated tests: </summary>
  <br>

  - You should have an input element with an id of "number".
  - You should have a button element with an id of "convert-btn".
  - You should have a div, span, or p element with an id of "output".
  - When you click on the #convert-btn element without entering a value into the #number element, the #output element should contain the text "Please enter a valid number".
  - When the #number element contains the number -1 and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number greater than or equal to 1".
  - When the #number element contains the number 4000 or greater and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number less than or equal to 3999".
  - When the #number element contains the number 9 and the #convert-btn element is clicked, the #output element should contain the text "IX".
  - When the #number element contains the number 16 and the #convert-btn element is clicked, the #output element should contain the text "XVI".
  - When the #number element contains the number 649 and the #convert-btn element is clicked, the #output element should contain the text "DCXLIX".
  - When the #number element contains the number 1023 and the #convert-btn element is clicked, the #output element should contain the text "MXXIII".
  - When the #number element contains the number 3999 and the #convert-btn element is clicked, the #output element should contain the text "MMMCMXCIX".
  - When the #number element contains a random negative number and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number greater than or equal to 1".
  - When the #number element contains a number greater than 4000 and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number less than or equal to 3999".
</details>