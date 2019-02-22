class Game
{
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }


    get activePlayer() {
        return this.players.find(player => player.active);
    }


    // create two player objects
    createPlayers() {
        const players = [new Player('Player 1', 1, '#e152258', true),
                        new Player('Player 2', 2, '#e59a13')];
        return players;
    }

    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }

    handleKeydown(e) {
        if (this.ready) {
            if (e.key === "ArrowLeft") {
                // move left
            } else if (e.key === "ArrowRight") {

            } else if (e.key === "ArrowDown") {

            }
        }
    }

}
