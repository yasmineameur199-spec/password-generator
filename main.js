import generatorRandom from "./generatePassword.js";

const pwd = generatorRandom();
if (pwd) {
  console.log("Mot de passe généré :", pwd);
}
