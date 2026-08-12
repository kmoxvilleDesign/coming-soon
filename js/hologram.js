(function () {
  "use strict";

  const PARTICLE_COLOR = "#c49b55";
  const PARTICLE_RADIUS = 1.5;
  const GRID_STEP = 10;
  const REPULSION_RADIUS = 150;
  const REPULSION_STRENGTH = 6;
  const EASE = 0.08;
  const FRICTION = 0.82;

  class Particle {
    constructor(x, y) {
      this.baseX = x;
      this.baseY = y;
      this.x = x;
      this.y = y;
      this.vx = 0;
      this.vy = 0;
    }

    update(mouseX, mouseY) {
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < REPULSION_RADIUS) {
        const force = (REPULSION_RADIUS - dist) / REPULSION_RADIUS;
        const angle = Math.atan2(dy, dx);
        this.vx -= Math.cos(angle) * force * REPULSION_STRENGTH;
        this.vy -= Math.sin(angle) * force * REPULSION_STRENGTH;
      }

      // Spring back to base position
      this.vx += (this.baseX - this.x) * EASE;
      this.vy += (this.baseY - this.y) * EASE;

      // Friction
      this.vx *= FRICTION;
      this.vy *= FRICTION;

      this.x += this.vx;
      this.y += this.vy;
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, PARTICLE_RADIUS, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function init() {
    const canvas = document.getElementById("hologram-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Intrinsic canvas resolution matches the visual aspect ratio
    const CANVAS_W = 1024;
    const CANVAS_H = 1536;
    canvas.width = CANVAS_W;
    canvas.height = CANVAS_H;

    let particles = [];
    let mouseX = -9999;
    let mouseY = -9999;

    const mask = new Image();
    mask.src = "./assets/images/clearvision-tooth-mask.png";
    mask.onload = function () {
      // Draw mask to an offscreen canvas to sample pixels
      const offscreen = document.createElement("canvas");
      offscreen.width = CANVAS_W;
      offscreen.height = CANVAS_H;
      const offCtx = offscreen.getContext("2d");
      offCtx.drawImage(mask, 0, 0, CANVAS_W, CANVAS_H);

      const imageData = offCtx.getImageData(0, 0, CANVAS_W, CANVAS_H);
      const data = imageData.data;

      for (let y = 0; y < CANVAS_H; y += GRID_STEP) {
        for (let x = 0; x < CANVAS_W; x += GRID_STEP) {
          const index = (y * CANVAS_W + x) * 4;
          const alpha = data[index + 3];
          if (alpha > 128) {
            particles.push(new Particle(x, y));
          }
        }
      }

      requestAnimationFrame(animate);
    };

    // Translate window mouse coords into canvas-local coords
    function toCanvasCoords(clientX, clientY) {
      const rect = canvas.getBoundingClientRect();
      const scaleX = CANVAS_W / rect.width;
      const scaleY = CANVAS_H / rect.height;
      return {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY,
      };
    }

    window.addEventListener("mousemove", function (e) {
      const pos = toCanvasCoords(e.clientX, e.clientY);
      mouseX = pos.x;
      mouseY = pos.y;
    });

    // Reset mouse when it leaves the canvas area
    canvas.addEventListener("mouseleave", function () {
      mouseX = -9999;
      mouseY = -9999;
    });

    function animate() {
      ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
      ctx.fillStyle = PARTICLE_COLOR;

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(mouseX, mouseY);
        particles[i].draw(ctx);
      }

      requestAnimationFrame(animate);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
