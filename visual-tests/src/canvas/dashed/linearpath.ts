import '../../style.css'
import rough from "@flyncx/roughjs"


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas id="canvas" width="800" height="800"/>
`

function generate() {
    const canvas: HTMLCanvasElement | null = document.querySelector("#canvas");
    if (!canvas) throw Error("#canvas is not found");
    const rc = rough.canvas(canvas, {
      options: {
        stroke: 'red',
        strokeLineDash: [15, 5],
        strokeLineDashOffset: 10
      }
    });

    rc.linearPath([
      [10, 10],
      [200, 10],
      [100, 100],
      [100, 50],
      [300, 100],
      [60, 200]
    ], { stroke: 'orange', strokeWidth: 4 });
}

generate()

