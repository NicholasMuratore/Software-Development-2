function chessBoard (dimension) {
    if (!dimension) return "";
    let dimensionlengthArray = new Array(dimension).fill(null);
    let line = dimensionlengthArray.map((v,i) => i%2===0?" ":"#").join("");
    let reverseLine = [...line].reverse().join("");
    let board = dimensionlengthArray.map((v,i) => i%2===0?line:reverseLine).join("\n");
    return board;
}
console.log(chessBoard(8));