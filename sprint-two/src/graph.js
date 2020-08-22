

// Instantiate a new graph
// implement using a hash, storing vertices as keys and edges as values
var Graph = function() {
  // keep track of vertices and edge relationships in this object
  this.newGraph = {};
};

// Add a node to the graph, passing in the node's value.
// I: takes in any node with a value
// O: updates the graph adding in the new node, unconnected
// C: should be O(1) since it is just adding a node into the graph unconnected
// E: should not add the same node if it exists in graph already
Graph.prototype.addNode = function(node) {
  // creates key from node value, and value as an array to hold edge relationships
  if (!this.newGraph[node]) {
    this.newGraph[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
// I: takes in any node with a value
// O: returns a boolean if the vertex exists in the graph
// C: should be O(1) because it is just constant to look up the keys
// E: n/a
Graph.prototype.contains = function(node) {
  // if the key exists in the graph, return true
  if (node in this.newGraph) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
// I: takes in any node with a value
// O: updates the graph with the vertex and any edges connected to it removed
// C: should be O(1) to remove a node since the hash has constant access to the key
// E: the node is connected to other vertices or not connected at all
Graph.prototype.removeNode = function(node) {
  // only remove if node is in the graph
  if (this.contains(node)) {
    // init a variable for any edge relationships
    var neighbors = this.newGraph[node];
    // if node is not connected to anything, delete the key
    if (!neighbors.length) {
      delete this.newGraph[node];
    } else {
      // if it is connected, iterate through each neighbor it's connected to
      for (let i = 0; i < neighbors.length; i++) {
        // remove the edge relationship using the removeEdge fcn
        this.removeEdge(node, neighbors[i]);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// I: any two nodes in the graph
// O: boolean if they share an edge relationship
// C: should be O(n) because we are linearly searching through the arrays to check for existence
// E: if either edge does not exist in the graph, return false
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // init two variables to both nodes' edge relationship arrays
  if (this.contains(fromNode) && this.contains(toNode)) {
    let fromEdges = this.newGraph[fromNode];
    let toEdges = this.newGraph[toNode];
    // if both node exists in the other's respective array there is an edge
    if (fromEdges.includes(toNode) && toEdges.includes(fromNode)) {
      return true;
    }
  }
  // return false if not
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
// I: takes in any two node values
// O: graph with the two inputs connected by an edge
// C: this would be O(1) as we are adding an edge to the end of the arrays
// E: if either node inputted are not in graph or if adding edge to a node itself
Graph.prototype.addEdge = function(fromNode, toNode) {
  // only add an edge if both nodes are present in graph
  if (this.contains(fromNode) && this.contains(toNode)) {
    // if fromNode and toNode are the same push to either once
    if (fromNode === toNode) {
      let fromEdge = this.newGraph[fromNode];
      fromEdge.push(toNode);
    } else {
      // get the edge relationship arrays from both nodes
      let fromEdge = this.newGraph[fromNode];
      let toEdge = this.newGraph[toNode];
      // push the value from the other to their respective arrays
      fromEdge.push(toNode);
      toEdge.push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
// I: any two node values existing in the graph
// O: the graph with those two input nodes disconnected
// C: would run in O(1), have to search the array to find the corresponding node to delete
// E: if removing an edge from itself
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // if inputs are the same, just remove from one of the arrays
  if (fromNode === toNode) {
    let fromEdge = this.newGraph[fromNode];
    let fromTarget = fromEdge.indexOf(toNode);
    fromEdge.splice(fromTarget, 1);
  } else {
    // get the edge relationship arrays from both nodes
    let fromEdge = this.newGraph[fromNode];
    let toEdge = this.newGraph[toNode];
    // get the index of where the node exists in each array
    let fromTarget = fromEdge.indexOf(toNode);
    let toTarget = toEdge.indexOf(fromNode);
    // remove the edges out of the arrays using splice
    fromEdge.splice(fromTarget, 1);
    toEdge.splice(toTarget, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
// I: a function to execute on each node in the graph
// O: updated graph with the function executed on it
// C: runs in O(n) time, has to execute on each node in the graph
// E:
Graph.prototype.forEachNode = function(cb) {
  // iterate through each vertex (key) of the graph
  for (vertex in this.newGraph) {
    // call the function on each key after converting them to integers
    cb(parseInt(vertex));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Put my hypotheses on time complexity in the constraints (C) section of each fcn.
 */


