import '../style.css'
import rough from "@flyncx/roughjs"


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" id="svg" width="800" viewBox="0 0 800 800"/>
`

function generate(){
  const svg: SVGSVGElement | null = document.querySelector("#svg");
  if(!svg) throw Error("#svg is not found");
  const rc = rough.svg(svg);

  svg.appendChild(rc.rectangle(10, 10, 80, 80));
  svg.appendChild(rc.rectangle(110, 10, 80, 80, { fill: 'red' }));
  svg.appendChild(rc.rectangle(210, 10, 80, 80, { fill: 'pink', fillStyle: 'solid' }));
  svg.appendChild(rc.rectangle(310, 10, 80, 80, { fill: 'red', fillStyle: 'cross-hatch' }));
  svg.appendChild(rc.rectangle(410, 10, 80, 80, { fill: 'red', fillStyle: 'zigzag', hachureGap: 8 }));
  svg.appendChild(rc.rectangle(510, 10, 80, 80, { fill: 'red', fillStyle: 'dots' }));

  svg.appendChild(rc.rectangle(10, 110, 80, 80, { roughness: 2 }));
  svg.appendChild(rc.rectangle(110, 110, 80, 80, { fill: 'red', stroke: 'blue', hachureAngle: 0, strokeWidth: 3 }));
  svg.appendChild(rc.rectangle(210, 110, 80, 80, { fill: 'pink', fillWeight: 5, hachureGap: 10, hachureAngle: 90 }));

  svg.appendChild(rc.rectangle(10, 210, 480, 280, { fill: 'red', fillStyle: 'dots', hachureGap: 20, fillWeight: 2 }));
}

generate()