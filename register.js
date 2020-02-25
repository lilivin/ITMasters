const form = document.getElementById("registration-form");
const submitButton = form.querySelector("button");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const listLecutures = document.getElementById("lectures");
const comunicate = document.getElementById("registered");

fetch('./words.json')
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data.words);
        let array = data.words;
        options(array);
    });

function options(array) {
    console.log(array);
    for (let i=0; i < array.length; i++) {
        let lecture = array[i];
        console.log(lecture);
        let option = document.createElement("option");
        option.textContent = lecture.name;
        listLecutures.appendChild(option);
    }
}

function checkPasswords() {
    const passwordsMatch = passwordInput.value === confirmPasswordInput.value;
    if (passwordsMatch) {
        confirmPasswordInput.setCustomValidity("");
    } else {
        confirmPasswordInput.setCustomValidity("Hasła nie są takie same!");
    }
};

function passwordEventListeners() {
    passwordInput.addEventListener("input", checkPasswords, false);
    confirmPasswordInput.addEventListener("input", checkPasswords, false);
};

passwordEventListeners();
