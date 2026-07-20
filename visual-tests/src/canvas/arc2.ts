import '../style.css'
import rough from "@flyncx/roughjs"


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas id="canvas" width="800" height="800"/>
`

function generate() {
    const canvas: HTMLCanvasElement | null = document.querySelector("#canvas");
    if (!canvas) throw Error("#canvas is not found");
    const rc = rough.canvas(canvas);

    rc.arc(350, 200, 200, 180, Math.PI, Math.PI * 1.6);
    rc.arc(350, 300, 200, 180, Math.PI, Math.PI * 1.6, true);
    rc.arc(350, 300, 200, 180, 0, Math.PI / 2, true, {
        stroke: 'red', strokeWidth: 4,
        fill: 'rgba(255,255,0,0.4)', fillStyle: 'solid'
    });
    rc.arc(350, 300, 200, 180, Math.PI / 2, Math.PI, true, {
        stroke: 'blue', strokeWidth: 2,
        fill: 'rgba(255,0,255,0.4)'
    });

    canvas.getContext('2d')!.translate(-210, 0);
    rc.arc(350, 300, 200, 180, Math.PI, Math.PI * 1.6, true, {
        fill: 'red', fillStyle: 'zigzag',
        hachureGap: 10
    });
    rc.arc(350, 300, 200, 180, 0, Math.PI / 2, true, {
        stroke: 'red', strokeWidth: 4,
        fill: 'orange', fillStyle: 'dots'
    });
    rc.arc(350, 300, 200, 180, Math.PI / 2, Math.PI, true, {
        stroke: 'blue', strokeWidth: 2,
        fill: 'red', fillStyle: 'cross-hatch'
    });
}

generate()

