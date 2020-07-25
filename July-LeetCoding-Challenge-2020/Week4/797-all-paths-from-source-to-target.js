/**
 * @param {number[][]} graph
 * @return {number[][]}
 * Runtime: 112 ms, faster than 70.57% of JavaScript online submissions for All Paths From Source to Target.
 * Memory Usage: 42.9 MB, less than 93.75% of JavaScript online submissions for All Paths From Source to Target.
 */
var allPathsSourceTarget = function(graph) {
    const results = [];
    findPaths([0], 0, graph, results);
    return results;
};

function findPaths(current, node, graph, results) {
    if (node == graph.length - 1) {
        results.push(current.slice(0));
        return;
    }

    for(let i = 0; i < graph[node].length; i++) {
        current.push(graph[node][i]);
        findPaths(current, graph[node][i], graph, results);
        current.pop();
    }
}