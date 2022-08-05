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
    const { vertices, adjList } = graph;
    const visited = [];
    visit(vertices[0]);
    function visit(v) {
        if (visited.includes(v)) {
            return
        }
        console.log(`visit ${v}`);
        visited.push(v);
        for (const nv of adjList[v]) {
            visit(nv)
        }
    }
}

function dfs1(graph) {
    const { vertices, adjList } = graph;
    let stack = [];
    stack.push(vertices[0]);
    while (stack.length) {
        const item = stack.pop();
        console.log(`visit ${item}`)
        const children = adjList[item];
        if (Array.isArray(children) && children.length) {
            stack.push(...children.reverse())
        }
    }
}
function dfs2(graph) {
    const {vertices, adjList} = graph;
    visit(vertices[0]);
    function visit(v) {
        console.log('visit ' + v);
        for (const nv of adjList[v]) {
            visit(nv)
        }
    }
}
dfs2(graph)