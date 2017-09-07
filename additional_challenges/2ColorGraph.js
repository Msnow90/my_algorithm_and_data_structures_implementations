function twoColorGraphCheck(graph) {
  for (var i = 0; i < graph.edges.length; ++i) {
    var vertice = graph.edges[i][0];
    var edge = graph.edges[i][1];
    
    // if one color exists, set the non existent one to the opposite color
    if (!vertice.color ^ !edge.color) {
      var colorCurrent = vertice.color || edge.color;
      var nodeToChange = (vertice.color) ? edge : vertice;
      nodeToChange.color = (colorCurrent === 'red') ? 'blue' : 'red';
    }
    // if neither color exist, set them both
    if (!vertice.color && !edge.color) {
      vertice.color = 'red';
      edge.color = 'blue';
    }
    // this is our fail case
    if (vertice.color === edge.color) return false;
  }
  return true;
}