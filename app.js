const dateOfBirth = document.querySelector("#select-birthdate");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const outPutMessage = document.querySelector("#msg")
let  resultImg = document.querySelector("#result-img")

checkButton.addEventListener("click", isYourBirthdayLucky);



function isYourBirthdayLucky(){
      outPutMessage.style.display = "none";
      resultImg.style.display = "none"

      const dob1 = dateOfBirth.value;
      const  sum = calculateSum(dob1);
      compareValue(sum,luckyNumber.value);
      
      

}
function calculateSum(dob1){
    dob1 = dob1.replaceAll("-", "");
    console.log(dob1)
    let sum = 0;  
    for(let i = 0; i<dob1.length; i++){
        sum = sum + Number(dob1.charAt(i)); 
    }
   return sum;
}
function showMessage(msg){
    outPutMessage.style.display = "block"
    outPutMessage.innerText = msg;
}
function compareValue(sum,luckyNumber){
    if(sum%luckyNumber === 0){
        console.log("nn")
        showMessage("your birthday is lucky");
        resultImg.setAttribute('src','./img/luck.gif');
        resultImg.style.display = "block"
        
    }
    else{
        console.log("a")
        showMessage("oops your birthday is not lucky");
        resultImg.setAttribute('src','./img/badluck.gif');
        resultImg.style.display = "block"


    }
}














