let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let circleArr = [];
let mouse = {
  x: undefined,
  y: undefined,
};

const c = canvas.getContext("2d");
const maxRadius = 40;
const colorArr = ["#295880", "#547999", "#7f9bb3", "#a9bccc", "#a9bccc"];

window.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

});

class Circle {
  constructor({ x, y, dx, dy, radius }) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArr[Math.floor(Math.random() * colorArr.length)];
  }

  draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  };

  update = () => {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    // adding interactivity

    if (
      mouse.x - this.x < 60 &&
      mouse.x - this.x > -60 &&
      mouse.y - this.y < 60 &&
      mouse.y - this.y > -60
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  };
}

const init = () => {
  circleArr = []
  for (let i = 0; i < 300; i++) {
    let radius = Math.floor(Math.random() * 30 + 1);
    let circleProperties = {
      x: Math.random() * (innerWidth - radius * 2) + radius,
      y: Math.random() * (innerHeight - radius * 2) + radius,
      dx: (Math.random() - 0.5) * 5,
      dy: (Math.random() - 0.5) * 5,
      radius,
    };
    circleArr.push(new Circle(circleProperties));
  }

}
const animate = () => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let index = 0; index < circleArr.length; index++) {
    circleArr[index].update();
  }
};
init();
animate();
