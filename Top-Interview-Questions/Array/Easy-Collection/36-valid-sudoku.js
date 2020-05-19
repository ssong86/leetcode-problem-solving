/**
 * @param {character[][]} board
 * @return {boolean}
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