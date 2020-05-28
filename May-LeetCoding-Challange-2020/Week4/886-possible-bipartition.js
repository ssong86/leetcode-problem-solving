/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 * Runtime: 148 ms, faster than 51.79% of JavaScript online submissions for Possible Bipartition.
 * Memory Usage: 47.2 MB, less than 100.00% of JavaScript online submissions for Possible Bipartition.
 * TC: O(dislikes.length), not O(N)
 * SC: O(dislikes.length)
 */
const Colors = Object.freeze({ Blue: true, Red: false });

var possibleBipartition = function(N, dislikes) {
    if (N < 2 || dislikes.length === 0) {
        return true;
    }
    
    const adjacent = new Map();
    for (const [vertex1, vertex2] of dislikes) {
        const conn1 = getConnections(adjacent, vertex1);
        const conn2 = getConnections(adjacent, vertex2);
        
        conn1.push(vertex2);
        conn2.push(vertex1);
    }
    
    const visit = new Map();
    const queue = new Queue();
    
    for (const [vertex] of dislikes) {
        if (!visit.has(vertex)) {
            queue.enqueue({ key: vertex, color: Colors.Blue });
            
            while (!queue.isEmpty()) {
                const { key: currentKey, color: currentColor } = queue.dequeue();
                
                if (!visit.has(currentKey)) {
                    visit.set(currentKey, currentColor);

                    for (const key of adjacent.get(currentKey)) {
                        if (visit.get(key) === currentColor) {
                            return false;
                        } else if (!visit.has(key)) {
                            queue.enqueue({ key, color: !currentColor });
                        }
                    }
                }
            }
        }
    }
    
    return true;
};

function getConnections (map, vertex) {
    if (map.has(vertex)) {
        return map.get(vertex);
    } else {
        map.set(vertex, []);
        return map.get(vertex);
    }
}

function Queue () {
    this.array = [];
}

Queue.prototype.enqueue = function (data) {
    this.array.push(data);
};

Queue.prototype.dequeue = function () {
    return this.array.shift();
};

Queue.prototype.isEmpty = function () {
    return this.array.length === 0;
};

console.log(possibleBipartition(5, [[1,2],[2,3],[3,4],[4,5],[1,5]]));