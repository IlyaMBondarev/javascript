let renderer = {
    board: "",
    letters: ["","a","b","c","d","e","f","g","h",""],

    renderBoard() {
        let result = this.generateBoard();
        document.body.insertAdjacentHTML('afterbegin', result);
    },

    generateBoard() {
        let board = '';
        for (let x = 9; x >= 0; x--) {
            board += '<tr>';
            for (let y = 9; y >= 0; y--) {

                /*
                 * генерация доски
                 */
                if ((x === 0 || x === 9) && (y !== 0 || y !== 9)) {
                    board += `<td class="edge">${this.letters[y]}`;
                } else if ((y === 0 || y === 9) && (x !== 0 || x !== 9)) {
                    board += `<td class="edge">${x}`;
                } else if (y % 2 === x % 2) {
                    board += `<td class="square dark">`;
                } else if (y % 2 !== x % 2) {
                    board += `<td class="square light">`;
                }

                /*
                 * Генерация фигур
                 */
                if ((x === 8) && (y === 1 || y === 8)) {
                    board += '<i class="fas fa-chess-rook black"></i></td>';
                } else if ((x === 1) && (y === 1 || y === 8)) {
                    board += '<i class="fas fa-chess-rook white"></i></td>';
                } else if ((x === 8) && (y === 2 || y === 7)) {
                    board += '<i class="fas fa-chess-knight black"></i></td>';
                } else if ((x === 1) && (y === 2 || y === 7)) {
                    board += '<i class="fas fa-chess-knight white"></i></td>';
                } else if ((x === 8) && (y === 3 || y === 6)) {
                    board += '<i class="fas fa-chess-bishop black"></i></td>';
                } else if ((x === 1) && (y === 3 || y === 6)) {
                    board += '<i class="fas fa-chess-bishop white"></i></td>';
                } else if ((x === 8) && (y === 5)) {
                    board += '<i class="fas fa-chess-queen black"></i></td>';
                } else if ((x === 1) && (y === 5)) {
                    board += '<i class="fas fa-chess-queen white"></i></td>';
                } else if ((x === 8) && (y === 4)) {
                    board += '<i class="fas fa-chess-king black"></i></td>';
                } else if ((x === 1) && (y === 4)) {
                    board += '<i class="fas fa-chess-king white"></i></td>';
                } else if ((x === 7) && y !== 0 && y!==9) {
                    board += '<i class="fas fa-chess-pawn black"></i></td>';
                } else if ((x === 2) && y !== 0 && y!==9) {
                    board += '<i class="fas fa-chess-pawn white"></i></td>';
                } else {
                    board += '</td>';
                }
            }
        }
        return `<table class="edges"><tbody>${board}</tbody></table>`
    },
};



renderer.renderBoard();