import '../style.css'
import rough from "@flyncx/roughjs"


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas id="canvas" width="800" height="800"/>
`

function generate() {
    const canvas: HTMLCanvasElement | null = document.querySelector("#canvas");
    if (!canvas) throw Error("#canvas is not found");
    const rc = rough.canvas(canvas);

    rc.ellipse(300, 350, 380, 280, { roughness: 2 });
    rc.ellipse(200, 150, 380, 280, { roughness: 1 });
    rc.ellipse(400, 150, 380, 280, { roughness: 0, fill: 'red', hachureGap: 10 });
    rc.ellipse(400, 150, 100.65800865800863, 17.70129870129859, { roughness: 0 });
    rc.ellipse(200, 150, 100, 17, { roughness: 0, fill: 'red' });
    rc.ellipse(200, 50, 100, 17, { roughness: 0, fill: 'pink', fillStyle: 'solid' });
}

generate()

