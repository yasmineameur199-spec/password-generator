import promptSync from "prompt-sync";

const prompt = promptSync();
export default function NumChars() { 
    let lengthUser = prompt("entrez le nombre de caractere que vous voulez pour votre mot de passe (entre 8 et 64)"); 
    lengthUser = Number(lengthUser); 
  if (isNaN(lengthUser) || lengthUser < 8 || lengthUser > 64) {
    console.log("La taille doit être entre 8 et 64.");
    return null; 
    }
     return lengthUser;}