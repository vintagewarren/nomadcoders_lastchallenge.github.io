const images = ["src/pic1.jpg", "src/pic2.jpg", "src/pic3.jpg", "src/pic4.jpg"];
const chosendImage = images[Math.floor(Math.random() * images.length)];
const bgrimg = document.createElement("img");

bgrimg.src = `${chosendImage}`;
document.body.appendChild(bgrimg);
