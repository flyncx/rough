import '../style.css'
import rough from "@flyncx/roughjs"


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas id="canvas" width="800" height="800"/>
`

function generate() {
    const canvas: HTMLCanvasElement | null = document.querySelector("#canvas");
    if (!canvas) throw Error("#canvas is not found");
    const rc = rough.canvas(canvas);
    const ctx = canvas.getContext('2d')!;

    const ops = { roughness: 1, fill: 'red', };
    // preserveVertices

    ctx.translate(20, 20);

    // rc.curve([
    //   [
    //     [0, 0],
    //     [107.03890991210938, 324.7185974121094],
    //     [297.3592224121094, 186.47903442382812],
    //     [356.3987731933594, -5.518890380859375],
    //     [490.5584411621094, 216.71908569335938],
    //     [645.1175231933594, 47.040374755859375],
    //   ]
    // ], ops);

    rc.curve([
      [
        [0, 0],
        [107.03890991210938, 324.7185974121094],
        [297.3592224121094, 186.47903442382812],
        [356.3987731933594, -5.518890380859375],
        [490.5584411621094, 216.71908569335938],
        // [645.1175231933594, 47.040374755859375]
      ],
      [
        [490.5584411621094, 216.71908569335938],
        [645.1175231933594, 47.040374755859375]
      ],
    ], ops);

    ctx.translate(0, 210);
}

generate()

