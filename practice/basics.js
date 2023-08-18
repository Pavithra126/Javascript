
//let headingElement = document.createElement("h1");
//console.log(headingElement);
//headingElement.textContent = "hello heading Element";
//document.body.appendChild(headingElement)

//let paraElement = document.createElement("p");
//paraElement.textContent = "THIS IS PARAGRAPH";


/*let a = ["HTML", "CSS", "JAVASCRIPT","REACTJS","FRONTEND"];
let listElement = document.createElement("ol");
listElement.type="i"
document.body.appendChild(listElement);
for (let each of a){
    let listItem = document.createElement("li");
    listItem.textContent=each
    listElement.appendChild(listItem)
}*/
let inputElement = document.createElement('input');
inputElement.addEventListener("keyup",function(event){
    console.log(event.target.value)
})
document.body.appendChild(inputElement)


