import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite'

const routes = {
  svg: resolveEntries('svg', ['index', 'ellipse', 'line', 'polygon', 'rectangle', 'rectangle2']),
  svgDashed: resolveEntries('svg/dashed', ['index', 'ellipse', 'line', 'polygon', 'rectangle']),
  canvas: resolveEntries('canvas', [
    ...['index'],
    ...['arc', 'arc2', 'curve-seed', 'curve'],
    ...['curve-seed', 'curve', 'curve2', 'curve3', 'curve4'],
    ...['ellipse', 'ellipse2', 'ellipse3'],
    ...['line', 'linearpath'],
    ...['map'],
    ...['path-with-transform', 'path', 'path2', 'path3', 'path4', 'path5', 'path6', 'path7'],
    ...['poly-seed', 'polygon', 'polygon2'],
    ...['rectangle']
  ]),
  canvasDashed: resolveEntries('canvas/dashed', [
    'index',
    'arc', 'curve', 'ellipse', 'line', 'linearpath', 'path-with-transform', 'path', 
    'polygon', 'rectangle'
  ]),
  canvasSingleStroke: resolveEntries('canvas/singlestroke', [
    'index',
    'arc', 'curve', 'ellipse', 'line', 'path', 'polygon', 'rectangle'
  ]) 
}

function resolveEntries(parent: string, input: string[]){
  const output: {[key: string]: string} = {};
  input.forEach(key=>{
    output[`${parent}${key}`.replaceAll('/','_')] = resolve(import.meta.dirname, `${parent}/${key}.html`);
  })
  return output
}


export default defineConfig({
  build: {
    rolldownOptions: {
      input: {
        root: resolve(import.meta.dirname, `index.html`),
        ...routes.svg,
        ...routes.svgDashed,
        ...routes.canvas,
        ...routes.canvasDashed,
        ...routes.canvasSingleStroke,
      },
    },
  },
})