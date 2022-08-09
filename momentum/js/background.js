const images = [
    "00.jpeg",
    "01.jpeg",
    "02.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// create HTML element from Javascript
const bgImage = document.createElement("img");

// setting img.src (property)
bgImage.src = `img/${chosenImage}`;

// add the element to HTML
document.body.appendChild(bgImage);