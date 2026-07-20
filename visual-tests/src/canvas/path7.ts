import '../style.css'
import rough from "@flyncx/roughjs"


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas id="canvas" width="800" height="800"/>
`

function generate() {
    const canvas: HTMLCanvasElement | null = document.querySelector("#canvas");
    if (!canvas) throw Error("#canvas is not found");
    const rc = rough.canvas(canvas);

    const roughness = 1;
    const path = `M 32 0 L 153.96380615234375 0 Q 185.96380615234375 0, 185.96380615234375 32 L 185.96380615234375 157.74319458007812 Q 185.96380615234375 189.74319458007812, 153.96380615234375 189.74319458007812 L 32 189.74319458007812 Q 0 189.74319458007812, 0 157.74319458007812 L 0 32 Q 0 0, 32 0`;
    const ops = {
      preserveVertices: true,
      fill: 'red',
      fillStyle: 'hachure',
      hachureGap: 6,
      roughness: roughness
    }

    const ctx = canvas.getContext('2d')!;

    ctx.translate(0, 50);
    rc.path(path, ops);

    ctx.translate(200, 0);
    rc.path(path, ops);

    ctx.translate(200, 0);
    rc.path(path, ops);

    ctx.translate(200, 0);
    rc.path(path, ops);

    ctx.resetTransform();
    ctx.translate(0, 250);
    rc.path(path, ops);

    ctx.translate(200, 0);
    rc.path(path, ops);

    ctx.translate(200, 0);
    rc.path(path, ops);

    ctx.translate(200, 0);
    rc.path(path, ops);

    ctx.resetTransform();
    ctx.translate(0, 450);
    rc.path(path, ops);

    ctx.translate(200, 0);
    rc.path(path, ops);

    ctx.translate(200, 0);
    rc.path(path, ops);

    ctx.translate(200, 0);
    rc.path(path, ops);
}

generate()

