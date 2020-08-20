

// Instantiate a new graph
// implement using a hash map, storing vertices as keys and edges as values
var Graph = function() {
  // keep track of vertices and edge relationships in this object
  this.newGraph = {};
};

// Add a node to the graph, passing in the node's value.
// I: takes in any node with a value
// O: updates the graph adding in the new node, unconnected
// C: all node values should be unique
// E: should be the same process regardless
Graph.prototype.addNode = function(node) {
  // creates key from node value, and value as an array to hold edge relationships
  this.newGraph[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
// I: takes in any node with a value
// O: returns a boolean if the vertex exists in the graph
// C: nodes should be unique
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
// C:
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
// C:
// E:
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // init two variables to both nodes' edge relationship arrays
  let fromEdges = this.newGraph[fromNode];
  let toEdges = this.newGraph[toNode];
  // if both node exists in the other's respective array there is an edge
  if (fromEdges.includes(toNode) && toEdges.includes(fromNode)) {
    return true;
  }
  // return false if not
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
// input: takes in any two node values
// output: graph with the two inputs connected by an edge
// constraint:
// edge cases: if either node inputted are not in graph
Graph.prototype.addEdge = function(fromNode, toNode) {
  // only add an edge if both nodes are present in graph
  if (this.contains(fromNode) && this.contains(toNode)) {
    // get the edge relationship arrays from both nodes
    let fromEdge = this.newGraph[fromNode];
    let toEdge = this.newGraph[toNode];
    // push the value from the other to their respective arrays
    fromEdge.push(toNode);
    toEdge.push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
// I:
// O:
// C:
// E:
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
// I:
// O:
// C:
// E:
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


