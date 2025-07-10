function clickMe(){
    let firstName = prompt("what is your name?");
    let lastName = prompt("what is your last name?");
    let h1Element = document.querySelector("#header");
    h1Element.innerHTML = `Welcome To My Mi Casa Su Casa ${firstName} ${lastName}.`;
}
let button = document.querySelector("#button");
button.addEventListener("click", clickMe);