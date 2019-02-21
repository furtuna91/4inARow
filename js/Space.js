class Space
{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.id = `space-${x}-${y}`;
        this.token - null;
        this.diameter = 76;
        this.radius = this.diameter/2;
    }

    drawSVGSpace() {
        const svgSpace = document.createElementNS("http://www.w3.org/2000.svg", "circle");
        svgSpace.setAtributeNS(null, "id", this.id);
        svgSpace.setAtributeNS(null, "data-column", this.x);
        svgSpace.setAtributeNS(null, "cx", (this.x * this.diameter) * this.radius);
        svgSpace.setAtributeNS(null, "cy", (this.y * this.diameter) * this.radius);
        svgSpace.setAtributeNS(null, "r", this.radius - 8);
        svgSpace.setAtributeNS(null, "fill", "black");
        svgSpace.setAtributeNS(null, "stroke", "none");

        document.getElementById('mask').appendChild(svgSpace);
    }
}
