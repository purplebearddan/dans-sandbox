export class Player {
  position = {
    x: 300,
    y: 300,
  };
  constructor({ name, element }) {
    this.name = name;
    this.element = element;
    this.playerStyleVars = document.querySelector("#playerStyleVars");
  }

  move(direction) {
    const stepSize = 15;
    switch (direction) {
      case "up":
        this.position.y = this.position.y - stepSize;
        break;
      case "down":
        this.position.y = this.position.y + stepSize;

        break;
      case "left":
        this.position.x = this.position.x - stepSize;
        break;
      case "right":
        this.position.x = this.position.x + stepSize;
        break;
      default:
        break;
    }
    this.playerStyleVars.textContent = `
            :root {
                --playerPos_top: ${this.position.y}px;
                --playerPos_left: ${this.position.x}px;
            }
    `;
  }
}
