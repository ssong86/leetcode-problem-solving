/**
 * @param {string[][]} tickets
 * @return {string[]}
 * Runtime: 112 ms, faster than 25.28% of JavaScript online submissions for Reconstruct Itinerary.
 * Memory Usage: 43.6 MB, less than 5.81% of JavaScript online submissions for Reconstruct Itinerary.
 */
var findItinerary = function(tickets) {
    tickets.sort();

    const map = {};
    for (const ticket of tickets) {
        if (!map[ticket[0]]) {
            map[ticket[0]] = [];
        }

        if (!map[ticket[1]]) {
            map[ticket[1]] = [];
        }

        map[ticket[0]].push(ticket[1]);
    }

    const result = [];

    DFS("JFK", ["JFK"], tickets, map, result);

    return result[0];
};

function DFS (from, itinerary, tickets, map, result) {
    if (itinerary.length == tickets.length + 1) {
        result.push(itinerary);
        return true;
    }

    let len = map[from].length;

    for (let i = 0; i < len; i++) {
        const to = map[from].shift();
        if (DFS(to, [...itinerary, to], tickets, map, result)) {
            return itinerary;
        }

        map[from].push(to);
    }

    return false;
}