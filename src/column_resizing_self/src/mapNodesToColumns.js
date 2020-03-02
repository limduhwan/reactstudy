export default function mapNodesToColumns(
  {
    children = [],
    columns = 1,
    dimensions = []
  } = {}
) {
  let nodes = [];
  let heights = [];

  if(columns === 1){
    return children;
  }

  if(dimensions.length && dimensions.length === children.length){
    for(let i=0; i<columns; i++){
      nodes[i] = [];
      heights[i] = 0;
    }

    children.forEach( (child, i) => {
      let {width, height} = dimensions[i];
      let index = heights.indexOf(Math.min(...heights));
      nodes[index].push(child);
      heights[index] += height / width;
    })
  }
  else{
    for(let i=0; i<columns; i++){
      nodes[i] = children.filter( (child, j) => j%columns === 1);
    }
  }

  return nodes;

}
