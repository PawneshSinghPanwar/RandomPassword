console.log("Copyright reserved by Pawnesh singh")

const passwordBox = document.getElementById("password")
const length = 8;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const number = "01234567890"
const symbols = "@#$%^&*()_+~|{}[]<>/-="
const allChars = uppercase + lowercase + number + symbols

function createPassword() {
    let password = ""
    password += uppercase[Math.floor(Math.random() * uppercase.length)]
    password += lowercase[Math.floor(Math.random() * lowercase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]

    while(length > password.length){
        password +=  allChars[Math.floor(Math.random() * allChars.length)]
    }

    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}





