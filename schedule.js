let list = document.getElementById("list");

function append(parent) {
    console.log(parent)
    for(let i = 0; i < parent.length; i++) {
        let array = parent[i]

        let li = document.createElement("li");
        let header = document.createElement("div");
        let name = document.createElement("h2");
        let description = document.createElement("p");
        let date = document.createElement("p");

        description.textContent = array.description; 
        name.textContent = array.name;
        date.textContent = array.date;

        header.classList.add("header");
        li.classList.add("listItem");

        list.appendChild(li);
        li.appendChild(header);
        header.appendChild(name);
        header.appendChild(date);
        li.appendChild(description);
    }
}

fetch('./words.json')
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data.words);
        let array = data.words;
        append(array)
    });