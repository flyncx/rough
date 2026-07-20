import '../style.css'
import rough from "@flyncx/roughjs"


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas id="canvas" width="800" height="800"/>
`

function generate() {
    const canvas: HTMLCanvasElement | null = document.querySelector("#canvas");
    if (!canvas) throw Error("#canvas is not found");
    const rc = rough.canvas(canvas);

    const ops = { fill: 'red', fillStyle: 'solid', roughness: 2, stroke: 'none' };

    rc.ellipse(10 + 40, 10 + 40, 80, 80, ops);
    rc.ellipse(110 + 40, 10 + 40, 80, 80, ops);
    rc.ellipse(210 + 40, 10 + 40, 80, 80, ops);
    rc.ellipse(310 + 40, 10 + 40, 80, 80, ops);
    rc.ellipse(410 + 40, 10 + 40, 80, 80, ops);
    rc.ellipse(510 + 40, 10 + 40, 80, 80, ops);

    rc.circle(10 + 40, 110 + 40, 80, ops);
    rc.circle(110 + 40, 110 + 40, 80, ops);
    rc.circle(210 + 40, 110 + 40, 80, ops);

    rc.ellipse(300, 350, 480, 280, ops);
}

generate()

