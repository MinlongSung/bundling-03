import classes from "./basic.scss";
import sampleImage from "./assets/lemoncode_icon.png";

const sampleText = document.querySelector('.sample-text');
if (sampleText) {
  sampleText.classList.add(classes['sample-text']);
}

const img = document.createElement('img');
img.src = sampleImage;
const imgContainer = document.getElementById('imgContainer');
imgContainer.appendChild(img);