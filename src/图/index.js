// adjacency 临接
class Graph{
    constructor(isDirected = false) { // 默认是无向图
        this.vertices = []; // 顶点
        this.adjList = {}; //使用散列表表示图
    }
    addVertex(v) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v);
            this.adjList[v] = []; // 使用数组表示该顶点的邻接点
        }
    }
    addEdge(a, b) { // 将a,b顶点建立连接
        if (!this.adjList[a]) {
            this.addVertex(a)
        }
        if (!this.adjList[b]) {
            this.addVertex(b)
        }
        this.adjList[a].push(b)
    }
    toString() {
        let str = '';
        for (const v of this.vertices) {
            str += `${v} => `;
            for (const k of this.adjList[v]) {
                str += `${k} `
            }
            str += '\n'
        }
        console.log(str);
        return str
    }
}
const graph = new Graph(true);
graph.addEdge('a', 'b');
graph.addEdge('a', 'c');
graph.addEdge('a', 'd');
graph.addEdge('b', 'e');
graph.addEdge('b', 'f');
graph.addEdge('c', 'g');


// graph.toString();
// console.log(graph)

function dfs(graph) {
    const vertices = graph.vertices;
    const adjList = graph.adjList;
    const visited = [];
    for (const v of vertices) {
        visit(v)
    }
    // visit('a')
    function visit(v) {
        if (visited.includes(v)) {
            return
        }
        console.log(`visit ${v}`);
        visited.push(v);
        const neighbors = adjList[v];
        for (const nv of neighbors) {
            if (!visited.includes(nv)) {
                visit(nv)
            }
        }
    }
}
dfs(graph)