let buttonElement=document.getElementById("btn");
let birthdayElement=document.getElementById("birthday");
let resultElement=document.getElementById("result");
function calculateAge(){
    let birthdayvalue = birthdayElement.value;
    if(birthdayvalue === ""){
        alert("Please Enter Your Birthday")
    }else{
        let age = getAge(birthdayvalue)
        resultElement.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}
function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
  
    if (
      month < 0 ||
      (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    ) {
      age--;
    }
  
    return age;
  }
  
  buttonElement.addEventListener("click", calculateAge);