let context; 
let container;
let current = 0;
const radius = 100;
let baseX = 200;
let baseY = 200;


window.onload = () => {
  container = document.createElement("canvas");
  container.width = 500;
  container.height = 500; 

  document.body.appendChild(container);

  context = container.getContext('2d');
  context.fillStyle = 'black';
  context.fillRect(0,0, container.width, container.height);
  setInterval(); 
}

setInterval(function() {

    let x = Math.cos(current) * radius;
    let y = Math.sin(current) * radius;
    context.fillStyle = 'red';
    context.fillRect(baseX + x, baseY + y, 3, 3);
    current += 0.1;
}, 5)
