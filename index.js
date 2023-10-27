console.log('Hello World');

const generateButton = document.getElementById("generate");
const input = document.querySelector(".password");
const charLength = document.getElementById("length");
const range = document.getElementById("range");
const labels = document.querySelectorAll(".labels")
const copyPassword = document.querySelector("#copy-text")

range.addEventListener("change",checkLength);

function checkLength(){
   charLength.innerHTML = this.value;
}

let upperLetter = document.getElementById("upper")
let lowerLetter = document.getElementById("lower")
let numberLetter = document.getElementById("number")
let symbols = document.getElementById("symbols");
let strengthText = document.getElementById("strength-checker")
const strengthChecks = document.querySelectorAll(".strength-detect");
const error = document.getElementById("copyMsg")


let password = '';

   function passwordChecker(){
password = '';

   
    if (upperLetter.checked) {
        password += 'ABCDEFGHTIKLMNOPQRSTUVWXYZ';


     } 
    if(lowerLetter.checked){
      password += 'abcdefghiklmnopqrstuvwxyz';

    }
       if(numberLetter.checked){
        password += '0123456789';


       } 

       if (symbols.checked) {
   password += '!@#$%^&*(){}[];,<>?/,.~`';
         
       }

       if (!password) {
        alert('please select one checkbox')
        return null;
       }


       return password;
  }
  
labels.forEach(label => {
 label.addEventListener("input",passwordChecker)
 })

 let randomPassword = '';

generateButton.addEventListener("click",function() {
  //alert("copied")
  passwordChecker();
 
      randomPassword = '';

     for (let i = 0; i < range.value; i++) {
     
       const random = Math.floor(Math.random() * password.length);
      
       randomPassword += password.substring(random , random+ 1);
      input.value = randomPassword;
     }
     console.log(randomPassword);
 
checks();
})

const copyMessage = document.getElementById("copyMsg")
let timeout;

copyPassword.addEventListener("click",function() {
  navigator.clipboard.writeText(randomPassword).then( () => {
   copyMessage.style.display = "block";
   setTimeout(() => {
    copyMessage.style.display = "none";
   },2000);

  })
 
  

})

let str1 = document.getElementById("strength1");
let str2 = document.getElementById("strength2");
let str3 = document.getElementById("strength3");
let str4 = document.getElementById("strength4");


function  checks(){
  

    if(range.value <= 5) {
       str1.style.backgroundColor = "red";
       strengthText.innerHTML = "Too Weak"
       str2.style.backgroundColor  = "";
       str3.style.backgroundColor  = "";
       str4.style.backgroundColor  = " transparent";
    }
     
    else if(range.value <= 8) {
      str1.style.backgroundColor  = "lightblue";
     str2.style.backgroundColor  = "lightblue";
     str3.style.backgroundColor  = "transparent";
     str4.style.backgroundColor  = " transparent";
      strengthText.innerHTML = " Weak"

    }else if(range.value <= 14){
      str1.style.backgroundColor  = "yellow";
     str2.style.backgroundColor  = "yellow";
     str3.style.backgroundColor  = "yellow";
     str4.style.backgroundColor  = " transparent";
      strengthText.innerHTML = " Medium"
    }
    else if(range.value <= 20){
      str1.style.backgroundColor  = "rgb(112, 250, 124)";
     str2.style.backgroundColor  = "rgb(112, 250, 124)";
     str3.style.backgroundColor = "rgb(112, 250, 124)"
     str4.style.backgroundColor  = "rgb(112, 250, 124)";

      strengthText.innerHTML = " Strong"
    }

}
