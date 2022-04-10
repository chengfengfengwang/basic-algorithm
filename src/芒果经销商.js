const graph = {};
graph['you'] = ['bob', 'claire', 'alice'];
graph['bob'] = ['anuj', 'peggy'];
graph['claire'] = ['thom', 'jonny'];
graph['alice'] = ['peggy'];

graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['jonny'] = [];

function isSeller(p) {
    return p === 'jonny' || p === 'alice'
}
function search(name) {
    const queue = [];
    const searched = [];
    queue.push(...graph[name]); // 初始队列
    while(queue.length) {
        const current = queue.shift(); // 从队首开始
        if (!searched.includes(current)) {
            if (isSeller(current)) {
                console.log(`${current} is a seller`)
                return true
            } else {
                searched.push(current);
                queue.push(...graph[current]) // 把当前人的子集加到队尾
            }
        }
    }
    return false
}
search('you')
// 回答问题：1. 在关系网中有没有芒果经销商 2. 最近的芒果经销商是谁
//console.log(graph)
