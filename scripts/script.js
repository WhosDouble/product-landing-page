const container = document.querySelector(".display-content");
const images = document.querySelectorAll(".changeimg");

let index = 0;

const change = () => {
  images[index].style.opacity = 0;
  index++;
  if (index >= images.length) index = 0;
  images[index].style.opacity = 1;
};

setInterval(change, 6000);

change();
