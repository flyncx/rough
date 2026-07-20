import '../style.css'
import rough from "@flyncx/roughjs"


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas id="canvas" width="800" height="800"/>
`

function generate() {
    const canvas: HTMLCanvasElement | null = document.querySelector("#canvas");
    if (!canvas) throw Error("#canvas is not found");
    const rc = rough.canvas(canvas);
    
    const seed = 232; // 1748179884
    const roughness = 1.5;

    rc.curve([
      [10, 10],
      [200, 10],
      [100, 100],
      [100, 50],
      [300, 100],
      [60, 200]
    ], { roughness, seed });

    canvas.getContext('2d')!.translate(0, 210);

    rc.curve([
      [10, 10],
      [200, 10],
      [100, 100],
      [100, 50],
      [300, 100]
    ], { roughness, seed });
}

generate()

