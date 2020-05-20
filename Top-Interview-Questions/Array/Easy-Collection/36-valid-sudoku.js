/**
 * @param {character[][]} board
 * @return {boolean}
 *
 * Time Complexity
 * O(1) since the board will always be 9x9, or have 81 elements
 *
 * Space Complexity
 * O(1) since the board will always be 9x9, or have 81 elements
 */
var isValidSudoku = function(board) {
    if (!board) {
        return false;
    }

    const set = new Set();

    for (const column of board.keys()) {
        for (const row of board[column].keys()) {
            const number = board[column][row];

            if (number !== ".") {
                const rowKey = `row-${row}-${number}`;
                const columnKey = `column-${column}-${number}`;
                const gridKey = `grid-${Math.floor(column / 3)}-${Math.floor(row / 3)}-${number}`

                if (set.has(rowKey) || set.has(columnKey) || set.has(gridKey)) {
                    return false;
                } else {
                    set.add(rowKey);
                    set.add(columnKey);
                    set.add(gridKey);
                }
            }
        }
    }

    return true;
};