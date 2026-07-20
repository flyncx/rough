import '../style.css'
import rough from "@flyncx/roughjs"
import * as d3 from "d3"
import "d3-geo"
import * as topojson from "topojson-client"


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas id="canvas" width="800" height="800"/>
`

async function generate() {
    const canvas: HTMLCanvasElement | null = document.querySelector("#canvas");
    if (!canvas) throw Error("#canvas is not found");
    const rc = rough.canvas(canvas, {
      options: {
        simplification: 0.1,
        roughness: 0.65
      }
    });

    const width = 960; 
    const height = 500;
    const projection = d3.geoAlbersUsa().scale(1070).translate([width/2, height/2]);
    const path = d3.geoPath().projection(projection);
    const randomColor = () => `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
    const randomAngle = () => (Math.random() > 0.5 ? -1 : 1) * (1 + Math.random() * 88);
    const randomStyle = () => (Math.random() > 0.5 ? 'solid' : 'hachure'); 

    const us: any = await d3.json("./us.json");
    const topo = topojson.feature(us, us.objects.states);
    
    for (let feature of (topo as any).features) {
      if (feature.id !== 48) {
        continue;
      }

      rc.path(path(feature)!, {
        fill: randomColor(),
        fillStyle: randomStyle(),
        hachureAngle: randomAngle()
      })
    }
}

generate()

