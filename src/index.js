// import sum from './helloPlot';
// import './imageViewer';
import '../styles/main.styl';
import 'p5';

window.setup = function () {
  console.log("Setup")
}
window.draw = function () {
  ellipse(50,50,80,80);
}

// // const tot = sum(10, 3);
// // console.log(`tot: ${tot}`);

// b.bonsai.run(document.getElementById('movie'), {
//     code: function () {
//         new Rect(10, 10, 100, 100)
//             .addTo(stage)
//             .attr('fillColor', 'green');
//     },
//     width: 500,
//     height: 400
// });

// const button = document.createElement('button');
// button.innerText = 'click me';
// button.onclick = () => {
//     console.log(`Clicked`);
//     System.import('./imageViewer').then(ivModule => {
//         ivModule.default();
//     });
// }

// document.body.appendChild(button);