function validSolution(board) {
    const board1 = [...board.map(arr => [...arr])];
    const board2 = [...board.map(arr => [...arr])];

    const checker = [
        checkRows(board),
        checkColumns(board1),
        checkBoxes(board2)
    ];
    // console.log('checker: ', checker);
    return checker.every(validation => validation === true);
}

function sequenceCheck(sequence) {
    const validSeq = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return sequence.every((num, i) => num === validSeq[i]);
}

function checkRows(matrix) {
    let rows = matrix.map(row => row.sort());
    return rows.every(row => sequenceCheck(row));
}

function checkColumns(matrix) {
    let columnMatrix = [[], [], [], [], [], [], [], [], []];
    matrix.forEach(row => row.forEach((num, i) => columnMatrix[i].push(num)));
    return checkRows(columnMatrix);
}

function makeBox(matrix, rowOne, colOne) {
    let arr = [
        matrix[rowOne][colOne],
        matrix[rowOne][colOne + 1],
        matrix[rowOne][colOne + 2],
        matrix[rowOne + 1][colOne],
        matrix[rowOne + 1][colOne + 1],
        matrix[rowOne + 1][colOne + 2],
        matrix[rowOne + 2][colOne],
        matrix[rowOne + 2][colOne + 1],
        matrix[rowOne + 2][colOne + 2]
    ];
    return arr;
}

function checkBoxes(matrix) {
    let boxesMatrix = [
        makeBox(matrix, 0, 0),
        makeBox(matrix, 0, 3),
        makeBox(matrix, 0, 6),
        makeBox(matrix, 3, 0),
        makeBox(matrix, 3, 3),
        makeBox(matrix, 3, 6),
        makeBox(matrix, 6, 0),
        makeBox(matrix, 6, 3),
        makeBox(matrix, 6, 6)
    ];
    return checkRows(boxesMatrix);
}

console.log("1st assertion: ");
console.assert(
    validSolution(
        [[5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9]]), true);

console.log("2nd assertion: ");
console.assert(
    validSolution(
        [[5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 0, 3, 4, 8],
        [1, 0, 0, 3, 4, 2, 5, 6, 0],
        [8, 5, 9, 7, 6, 1, 0, 2, 0],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 0, 1, 5, 3, 7, 2, 1, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 0, 0, 4, 8, 1, 1, 7, 9]]), false);
