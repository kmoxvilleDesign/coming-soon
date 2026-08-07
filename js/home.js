const heroTiles = [
  { x: "-2.6rem", y: "2.5rem", w: "2.2rem", h: "2rem", color: "rgb(42 42 44 / 0.88)" },
  { x: "-1.85rem", y: "4.65rem", w: "1.8rem", h: "1.6rem", color: "rgb(31 32 36 / 0.82)" },
  { x: "2rem", y: "6rem", w: "1.5rem", h: "1.5rem", color: "rgb(17 18 22 / 0.84)" },
  { x: "-2.15rem", y: "12.2rem", w: "1.5rem", h: "1.3rem", color: "rgb(42 42 44 / 0.78)" },
  { x: "0.65rem", y: "15.55rem", w: "2rem", h: "1.8rem", color: "rgb(31 32 36 / 0.8)" },
  { x: "1.5rem", y: "21.85rem", w: "1.8rem", h: "1.6rem", color: "rgb(17 18 22 / 0.76)" },
  { x: "-2.75rem", y: "30.65rem", w: "2.3rem", h: "2.1rem", color: "rgb(42 42 44 / 0.84)" },
  { x: "2.75rem", y: "38.65rem", w: "1.7rem", h: "1.5rem", color: "rgb(31 32 36 / 0.78)" },
  { x: "-3.7rem", y: "7.6rem", w: "1.55rem", h: "1.35rem", color: "rgb(17 18 22 / 0.78)" },
  { x: "1rem", y: "1.3rem", w: "2rem", h: "1.8rem", color: "rgb(199 157 114 / 0.85)" },
  { x: "-1.9rem", y: "18.5rem", w: "1.45rem", h: "1.25rem", color: "rgb(42 42 44 / 0.72)" },
  { x: "2.3rem", y: "25.65rem", w: "1.7rem", h: "1.5rem", color: "rgb(17 18 22 / 0.74)" },
  { x: "-4.45rem", y: "33.2rem", w: "1.9rem", h: "1.7rem", color: "rgb(199 157 114 / 0.85)" },
  { x: "-0.05rem", y: "40.35rem", w: "1.5rem", h: "1.3rem", color: "rgb(42 42 44 / 0.7)" }
];

const tilesContainer = document.querySelector(".home-hero__tiles");

if (tilesContainer) {
  const fragment = document.createDocumentFragment();

  heroTiles.forEach((tile) => {
    const tileElement = document.createElement("span");
    tileElement.className = "home-hero__tile";
    tileElement.style.setProperty("--tile-x", tile.x);
    tileElement.style.setProperty("--tile-y", tile.y);
    tileElement.style.setProperty("--tile-w", tile.w);
    tileElement.style.setProperty("--tile-h", tile.h);
    tileElement.style.setProperty("--tile-color", tile.color);
    fragment.appendChild(tileElement);
  });

  tilesContainer.replaceChildren(fragment);
}
