type Vertex = string;
class Graph {
  adjacencyList: { [k: string]: string[] };
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex: Vertex) {
    this.adjacencyList[vertex] = this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1: Vertex, vertex2: Vertex) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  dfs(start: Vertex) {
    const visited: Record<Vertex, boolean> = {};
    const traverse = (vertex: Vertex) => {
      if (visited[vertex]) return;
      visited[vertex] = true;
      this.adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          traverse(neighbour);
        }
      });
    };
    traverse(start);
    return Object.keys(visited);
  }
  dfsIterative(start: Vertex) {
    const stack = [start];
    const visited = { [start]: true };
    const result = [];
    while (stack.length) {
      const node = stack.pop();
      result.push(node);
      this.adjacencyList[node!].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }
    return result;
  }
  bfs(start: Vertex) {
    const queue = [start];
    const visited = { [start]: true };
    const result = [];
    while (queue.length) {
      const node = queue.shift();
      result.push(node);
      this.adjacencyList[node!].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return result;
  }
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.dfsIterative("A"));
console.log(g.bfs("A"));

// All use visited
// DFS - recurisive
// DFSiterative - stack
// bfs - queue
