function clickButton(event) {
    event.preventDefault();
    alert("heyy");
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML =`  
    1.Recent renovations and upgrades.
   2. Notable brands of appliances, flooring, lighting, etc.
   3. Lot size.
    4.Basement/garage.
   5. Additional features: pool, fireplace, deck, secret coding room etc.
    Unique characteristics: historic property, ocean views, etc.`

    new Typewriter("#description", {
      strings: "description",
      autoStart: true,
      cursor: null,
    });
}
let buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", clickButton)