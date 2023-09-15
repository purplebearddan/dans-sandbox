import { Player } from "./src/classes/Player.js";

const main = () => {
  const player = new Player({
    name: "Jeffy",
    element: document.querySelector("#player"),
  });

  window.addEventListener("keydown", (e) => {
    e.preventDefault();
    console.log(e.code);

    if (e.code === "KeyW") {
      player.move("up");
    }
    if (e.code === "KeyS") {
      player.move("down");
    }
    if (e.code === "KeyA") {
      player.move("left");
    }
    if (e.code === "KeyD") {
      player.move("right");
    }
  });
};

window.addEventListener("DOMContentLoaded", main);
