import generatorRandom from "./generatePassword.js";
import NumChars  from "./askUser.js"
const nombre=NumChars()

const pwd = generatorRandom(nombre);
console.log("Mot de passe généré :", pwd);
