"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};

const select = document.querySelector("select");

select.innerHTML = "";
for (let key of Object.keys(itemData)) {
    const opcion = document.createElement("option");
    opcion.value = key;
    opcion.textContent = itemData[key].name;
    select.appendChild(opcion);
}

function cargarDatos(dato) {
    const display = document.getElementById("displayImage");
    const fotografo = document.getElementById("photographer");
    const descripcion = document.getElementById("description");
    const puntaje = document.getElementById("score");

    display.src = itemData[dato].image;
    fotografo.value = itemData[dato].photographer;
    descripcion.value = itemData[dato].description;
    puntaje.value = itemData[dato].score;
}

cargarDatos(select.value = Object.keys(itemData)[0]);

select.addEventListener("change", function() {
    cargarDatos(select.value);
});

const incrementar = document.getElementById("increaseScore");
const disminuir = document.getElementById("decreaseScore");

incrementar.addEventListener("click", function() {
    const dato = select.value;
    itemData[dato].score += 1;
    document.getElementById("score").value = itemData[dato].score;
});

disminuir.addEventListener("click", function() {
    const dato = select.value;
    itemData[dato].score -= 1;
    document.getElementById("score").value = itemData[dato].score;
});

console.log("Llegue aqui!");