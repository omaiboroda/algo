type QueueNode = {
  name: string;
  priority: number;
};
class PriorityQueue {
  values: QueueNode[];

  constructor() {
    this.values = [];
  }
  enqueue(name: string, priority: number) {
    this.values.push({ name, priority });
    this.values.sort((a, b) => a.priority - b.priority);
  }
  dequeue(): QueueNode | undefined {
    return this.values.shift();
  }
}

type AdjacencyList = {
  [key: string]: { name: string; distance: number }[];
};

type Name = string;
type Distance = number;
type Distances = Record<keyof AdjacencyList, number>;
type Previous = Record<keyof AdjacencyList, keyof AdjacencyList>;

class WeightedGraph {
  adjacencyList: AdjacencyList;
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(name: Name) {
    this.adjacencyList[name] = this.adjacencyList[name] || [];
  }
  addEdge(v1: Name, v2: Name, distance: Distance) {
    this.adjacencyList[v1].push({ name: v2, distance });
    this.adjacencyList[v2].push({ name: v1, distance });
  }
  _distance(start: Name): Distances {
    return Object.keys(this.adjacencyList).reduce(
      (prev, cur) => ({ ...prev, [cur]: cur === start ? 0 : Infinity }),
      {}
    );
  }
  _previous(): Previous {
    return Object.keys(this.adjacencyList).reduce(
      (prev, cur) => ({ ...prev, [cur]: null }),
      {}
    );
  }
  _queue(distances: Distances) {
    const queue = new PriorityQueue();
    Object.keys(distances).forEach((vertex) =>
      queue.enqueue(vertex, distances[vertex])
    );
    return queue;
  }
  dijkstra(start: Name, end: Name) {
    const distances = this._distance(start);
    const previous = this._previous();
    const queue = this._queue(distances);
    while (queue.values.length !== 0) {
      const node = queue.dequeue();
      if (typeof node !== "undefined") {
        if (node.name === end) break;
        this.adjacencyList[node.name].forEach((neighbour) => {
          const totalDistanceToNeighbour =
            distances[node.name] + neighbour.distance;
          const knownDistanceToNeighbour = distances[neighbour.name];
          if (totalDistanceToNeighbour < knownDistanceToNeighbour) {
            distances[neighbour.name] = totalDistanceToNeighbour;
            previous[neighbour.name] = node.name;
            queue.enqueue(neighbour.name, totalDistanceToNeighbour);
          }
        });
      }
    }

    const path = [];
    let parent = end;
    while (parent) {
      path.push(parent);
      parent = previous[parent] as Name;
    }
    return path.reverse();
  }
  // [x]addVertex
  // [x]addEdge
  // [x]AdjacencyList {"A": [{node: "B", weight: 4}]}
  // [x]distanceFromStart {B:5, ...}
  // [x]Previous {A: B}
  // while items in Queue, pop it
  // if currentDistance + nodeDistance < knowDistance: update distanceFromStart, Previous, push to queue with priority
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("B", "E", 3);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("F", "E", 1);

console.log(graph.dijkstra("A", "E"));
