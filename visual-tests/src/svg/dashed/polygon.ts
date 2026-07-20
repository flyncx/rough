import '../../style.css'
import rough from "@flyncx/roughjs"


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" id="svg" width="800" viewBox="0 0 800 800"/>
`

function generate(){
  const svg: SVGSVGElement | null = document.querySelector("#svg");
  if(!svg) throw Error("#svg is not found");
  const rc = rough.svg(svg, {
    options: {
      strokeLineDash: [15, 5],
      strokeLineDashOffset: 10
    }
  });

  svg.appendChild(rc.polygon([
    [10, 10],
    [200, 10],
    [100, 100],
    [100, 50],
    [300, 100],
    [60, 200]
  ], { stroke: 'black', strokeWidth: 2, fill: 'red', hachureAngle: 90, fillLineDash: [15, 5], fillLineDashOffset: 10 }));
}

generate()