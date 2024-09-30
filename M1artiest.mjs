import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});



let artiest = await userInput.question("kies een artiest. ")

switch(artiest){
    case'werenoi':
    console.log('Ze zijn de artist achter de hit: tu connais');
    break;
    case'ninho':
    console.log('Ze zijn de artist achter de hit: filon');
    break;
    case'naps':
    console.log('Ze zijn de artist achter de hit: pochon bleu');
    break;
    case'sdm':
    console.log('Ze zijn de artist achter de hit: merci');
    break;
    default: 
    console.log("error");
    
}
process.exit();
