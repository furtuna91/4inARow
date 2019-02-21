class Token
{
    constructor(index, owner){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }

    get htmlToken() {
        return document.getElementById(this.id);
    }

    drawHTMLToken() {
        const token = document.createElement('div');
        document.getElementById('game-board-underlay').appendChild(token);
        token.setAtribute('id', this.id);
        token.setAtribute('class', 'token');
        token.style.backgroundColor = this.owner.color;
    }
}
