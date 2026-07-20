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

    rc.rectangle(10, 10, 80, 80);
    rc.rectangle(110, 10, 80, 80, { fill: 'red' });
    rc.rectangle(210, 10, 80, 80, { fill: 'pink', fillStyle: 'solid' });
    rc.rectangle(310, 10, 80, 80, { fill: 'red', fillStyle: 'cross-hatch' });
    rc.rectangle(410, 10, 80, 80, { fill: 'red', fillStyle: 'zigzag', hachureGap: 8 });
    rc.rectangle(510, 10, 80, 80, { fill: 'red', fillStyle: 'dots' });

    rc.rectangle(10, 110, 80, 80, { roughness: 2 });
    rc.rectangle(110, 110, 80, 80, { fill: 'red', stroke: 'blue', hachureAngle: 0, strokeWidth: 3, fillLineDash: [15, 5], fillLineDashOffset: 10 });
    rc.rectangle(210, 110, 80, 80, { fill: 'pink', fillWeight: 5, hachureGap: 10, hachureAngle: 90, fillLineDash: [15, 5], fillLineDashOffset: 10 });

    rc.rectangle(10, 210, 480, 280, { fill: 'red', fillStyle: 'dots', hachureGap: 20, fillWeight: 2 });
}

generate()

