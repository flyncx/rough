import '../style.css'
import rough from "@flyncx/roughjs"


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" id="svg" width="800" viewBox="0 0 800 800"/>
`

function generate(){
  const svg: SVGSVGElement | null = document.querySelector("#svg");
  if(!svg) throw Error("#svg is not found");
  const rc = rough.svg(svg);
  
  svg.appendChild(rc.rectangle(10, 10, 280, 280, {
    fill: 'red',
    hachureGap: 1.7
  }));
  
}

generate()