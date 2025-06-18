function clickButton(event) {
    event.preventDefault();
    alert("heyy");

    new Typewriter("#description", {
      strings: ["Hello", "World"],
      autoStart: true,
      cursor: null,
    });
}
let buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", clickButton);