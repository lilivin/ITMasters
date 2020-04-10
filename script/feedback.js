const section = document.getElementById("feedback");
const form = section.querySelector("form");
const sent = document.getElementById("feedback-sent");

function formSubmit(event) {
    event.preventDefault();
    form.classList.add("sending");
};

function animation() {
    section.style.display = "none";
    sent.style.display = "block";
};

form.addEventListener("submit", formSubmit, false);

form.addEventListener("animationend", animation, false);

