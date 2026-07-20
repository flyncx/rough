import '../style.css'
import rough from "@flyncx/roughjs"


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas id="canvas" width="800" height="800"/>
`

function generate() {
    const canvas: HTMLCanvasElement | null = document.querySelector("#canvas");
    if (!canvas) throw Error("#canvas is not found");
    const rc = rough.canvas(canvas);

    rc.polygon([
      [10, 300],
      [150, 200],
      [310, 300],
      [200, 50],
      [100, 50]
    ], { fill: 'red', fillStyle: 'zigzag', hachureGap: 20, hachureAngle: 85 });
}

generate()

