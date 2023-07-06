import "./styles.css";
import vision from "@google-cloud/vision";

// const client = new vision.ImageAnnotatorClient();

class App {
  constructor() {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.dragging = false;

    this.resize();

    this.canvas.addEventListener("mouseup", this.onMouseUp.bind(this), true);
    this.canvas.addEventListener(
      "mousedown",
      this.onMouseDown.bind(this),
      true
    );
    this.canvas.addEventListener(
      "mousemove",
      this.onMouseOver.bind(this),
      true
    );
    window.addEventListener("resize", this.resize.bind(this));

    this.init();
  }

  init() {
    const button = document.createElement("button");
    button.innerText = "download";
    button.onclick = async () => {
      // const [result] = await client.textDetection(this.toImage());
      // const detections = result.textAnnotations;
      // console.log("Text:");
      // detections.forEach((text) => console.log(text));
      // const a = document.createElement("a");
      // a.href = this.toImage();
      // a.download = "Canvas";
      // a.click();
    };

    document.body.appendChild(button);
  }

  resize() {
    this.canvas.width = document.body.clientWidth;
    this.canvas.height = document.body.clientHeight;
  }

  onMouseOver(e) {
    if (!this.dragging) return;

    console.log(e);
    this.ctx.beginPath();
    this.ctx.arc(e.offsetX, e.offsetY, 10, 0, Math.PI * 2);
    this.ctx.fillStyle = "orangered";
    this.ctx.fill();
  }

  onMouseDown(e) {
    this.dragging = true;
  }

  onMouseUp(e) {
    this.dragging = false;
  }

  toImage() {
    return this.canvas.toDataURL("image/png", 0.7);
  }
}

window.onload = () => {
  new App();
};
