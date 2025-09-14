import NumChars  from "./askUser.js"
export default function generatorRandom() {
    const lengthUser = NumChars();
    if (lengthUser === null) {
        return null; 
    }
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";

    for (let i = 0; i < lengthUser; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    return password;
}