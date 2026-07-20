import '../style.css'
import rough from "@flyncx/roughjs"


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas id="canvas" width="800" height="800"></canvas>
  <br></br>
  <input id="input" type="range" style="width: 100%; display: block; box-sizing: border-box;" min="0" max="800"></input>
`

function generate() {
    const canvas: HTMLCanvasElement | null = document.querySelector("#canvas");
    if (!canvas) throw Error("#canvas is not found");
    const rc = rough.canvas(canvas);
    const ctx = canvas.getContext('2d')!;
    const input: HTMLInputElement | null  = document.querySelector('input')!;

    const getRings = () => {
      const xPos = +input.value;
      return [
        [
          [100, 300],
          [800, 300],
          [800, 0],
          [100, 0]
        ],
        [
          [200, 250],
          [200, 50],
          [600, 50],
          [600, 250]
        ],
        [
          [400, 200],
          [550, 200],
          [550, 100],
          [400, 100]
        ],
        [
          [xPos + 25, 175],
          [xPos + 25, 125],
          [xPos + 75, 125],
          [xPos + 75, 175]
        ]
      ]
    };

    const draw = () => {
      ctx.clearRect(0, 0, 1000, 1000);
      const path = getRings().map((d) => `M${d.join("L")}Z`).join(' ') + ' M 650, 150 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0';
      rc.path(path, {
        seed: 2142156371,
        fill: 'orange',
        fillWeight: 2
      });
    }

    draw();
    input.addEventListener('input', () => draw());
}

generate()

