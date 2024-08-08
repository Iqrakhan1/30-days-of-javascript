class Graph {
  constructor() {
    this.adjList = new Map();
  }

  // Method to add a vertex to the graph
  addVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }

  // Method to add an edge to the graph
  addEdge(source, destination) {
    if (!this.adjList.has(source)) {
      this.addVertex(source);
    }
    if (!this.adjList.has(destination)) {
      this.addVertex(destination);
    }
    this.adjList.get(source).push(destination);
    this.adjList.get(destination).push(source); // If it's an undirected graph
  }

  // Method to perform BFS
  bfs(start) {
    const visited = new Set();
    const queue = [];
    visited.add(start);
    queue.push(start);

    while (queue.length > 0) {
      const vertex = queue.shift();
      process.stdout.write(vertex + " ");

      for (const neighbor of this.adjList.get(vertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    console.log();
  }
}

// Example usage
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);

console.log("Breadth-First Search starting from vertex 1:");
graph.bfs(1); // Output will show BFS traversal starting from vertex 1
