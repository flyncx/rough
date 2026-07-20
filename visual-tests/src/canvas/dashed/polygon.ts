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

    rc.polygon([
      [10, 10],
      [200, 10],
      [100, 100],
      [100, 50],
      [300, 100],
      [60, 200]
    ], { stroke: 'black', strokeWidth: 2, fill: 'red', hachureAngle: 90 });

    canvas.getContext('2d')!.translate(0, 210);
    rc.polygon([
      [10, 10],
      [200, 10],
      [100, 100],
      [100, 50],
      [300, 100],
      [60, 200]
    ], { fill: 'red', fillStyle: 'solid' });

    canvas.getContext('2d')!.translate(0, 210);
    rc.polygon([
      [10, 10],
      [200, 10],
      [100, 100],
      [100, 50],
      [300, 100],
      [60, 200]
    ], { fill: 'red', fillStyle: 'dots', hachureGap: 16, fillWeight: 2 });

    canvas.getContext('2d')!.translate(300, 0);
    rc.polygon([
      [10, 10],
      [200, 10],
      [100, 100],
      [100, 50],
      [300, 100],
      [60, 200]
    ], { fill: 'red', fillStyle: 'cross-hatch', hachureGap: 8 });

    canvas.getContext('2d')!.translate(0, -210);
    rc.polygon([
      [10, 10],
      [200, 10],
      [100, 100],
      [100, 50],
      [300, 100],
      [60, 200]
    ], { fill: 'red', fillStyle: 'zigzag', hachureGap: 8 });

    canvas.getContext('2d')!.translate(0, -210);
    rc.polygon([
      [10, 10],
      [200, 10],
      [100, 100],
      [100, 50],
      [300, 100],
      [60, 200]
    ], { stroke: 'orange', strokeWidth: 5 });
}

generate()

