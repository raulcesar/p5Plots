// import sum from './helloPlot';
// import './imageViewer';
import '../styles/main.styl';
import 'p5';

window.setup = function () {
  console.log("Setup")
  createCanvas(640, 480);
}
window.draw = function () {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

// // const tot = sum(10, 3);
// // console.log(`tot: ${tot}`);

// const button = document.createElement('button');
// button.innerText = 'click me';
// button.onclick = () => {
//     console.log(`Clicked`);
//     System.import('./imageViewer').then(ivModule => {
//         ivModule.default();
//     });
// }

// document.body.appendChild(button);