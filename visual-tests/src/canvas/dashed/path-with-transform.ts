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
        strokeLineDash: [15, 5],
        strokeLineDashOffset: 10
      }
    });

    const ctx = canvas.getContext('2d')!;
    ctx.translate(150, 150);
    ctx.scale(1, -1);
    rc.path('M-100, 0L0 100L100 100Z', { fill: 'red' });
}

generate()

