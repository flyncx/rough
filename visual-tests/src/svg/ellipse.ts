import '../style.css'
import rough from "@flyncx/roughjs"


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" id="svg" width="800" viewBox="0 0 800 800"/>
`

function generate(){
  const svg: SVGSVGElement | null = document.querySelector("#svg");
  if(!svg) throw Error("#svg is not found");
  const rc = rough.svg(svg);
  svg.appendChild(rc.ellipse(10 + 40, 10 + 40, 80, 80));
  svg.appendChild(rc.ellipse(110 + 40, 10 + 40, 80, 80, { fill: 'red' }));
  svg.appendChild(rc.ellipse(210 + 40, 10 + 40, 80, 80, { fill: 'pink', fillStyle: 'solid' }));
  svg.appendChild(rc.ellipse(310 + 40, 10 + 40, 80, 80, { fill: 'red', fillStyle: 'cross-hatch' }));
  svg.appendChild(rc.ellipse(410 + 40, 10 + 40, 80, 80, { fill: 'red', fillStyle: 'zigzag', hachureGap: 8 }));
  svg.appendChild(rc.ellipse(510 + 40, 10 + 40, 80, 80, { fill: 'red', fillStyle: 'dots' }));  

  svg.appendChild(rc.circle(10 + 40, 110 + 40, 80, { roughness: 2 }));
  svg.appendChild(rc.circle(110 + 40, 110 + 40, 80, { fill: 'red', stroke: 'blue', hachureAngle: 0, strokeWidth: 3 }));
  svg.appendChild(rc.circle(210 + 40, 110 + 40, 80, { fill: 'pink', fillWeight: 3, hachureGap: 8, hachureAngle: 45 }));

  svg.appendChild(rc.ellipse(300, 350, 480, 280, { fill: 'red', fillStyle: 'dots', hachureGap: 20, hachureAngle: 0, fillWeight: 2}));
}

generate()