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

  svg.appendChild(rc.line(10, 10, 100, 10));
  svg.appendChild(rc.line(10, 210, 500, 210));
  svg.appendChild(rc.line(10, 20, 10, 110, { stroke: 'red' }));
  svg.appendChild(rc.line(10, 10, 100, 10));
  svg.appendChild(rc.line(50, 30, 200, 100, { stroke: 'blue', strokeWidth: 5 }));
}

generate()