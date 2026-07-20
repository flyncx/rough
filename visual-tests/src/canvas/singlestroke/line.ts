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
        disableMultiStroke: true
      }
    });

    rc.line(10, 10, 100, 10);
    rc.line(10, 210, 500, 210);
    rc.line(10, 20, 10, 110, { stroke: 'red' });
    rc.line(50, 30, 200, 100, { stroke: 'blue', strokeWidth: 5 });
}

generate()

