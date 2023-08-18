let headingElement=document.createElement("h1");
//console.log(headingElement)
headingElement.textContent="Log In Form";
headingElement.style.color='blue'
document.body.appendChild(headingElement)

let inputElement = document.createElement('input')
inputElement.textContent='Enter Your Name';
inputElement.style.color="green";
document.body.appendChild(inputElement)
 let breakElement = document.createElement('br');
 document.body.appendChild(breakElement);

let inputEle = document.createElement('input')
inputEle.textContent='Enter Your password';
inputEle.style.color="green";
document.body.appendChild(inputEle)


let buttonElement = document.createElement("button")
buttonElement.textContent='log in';
buttonElement.style.color='red'
document.body.appendChild(buttonElement)