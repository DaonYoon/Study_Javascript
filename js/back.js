const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",  
];


const backimage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.src =`img/${backimage}`;

document.body.appendChild(bgimage); //어펜드 맨뒤에 prepend 맨맢에


