// Confetti.tsx
import React, { useRef, useEffect } from "react";

const FRAME_RATE = 30;
const DT = 1.0 / FRAME_RATE;
const DEG_TO_RAD = Math.PI / 180;
const COLORS = [
  ["#df0049", "#660671"],
  ["#00e857", "#005291"],
  ["#2bebbc", "#05798a"],
  ["#ffd200", "#b06c00"]
];

class Vector2 {
  constructor(public x: number, public y: number) {}
  length() { return Math.sqrt(this.x * this.x + this.y * this.y); }
  add(vec: Vector2) { this.x += vec.x; this.y += vec.y; }
  sub(vec: Vector2) { this.x -= vec.x; this.y -= vec.y; }
  mul(f: number) { this.x *= f; this.y *= f; }
  clone() { return new Vector2(this.x, this.y); }
}

type ConfettiPaperProps = {
  bounds: Vector2;
};

class ConfettiPaper {
  pos: Vector2;
  angle: number;
  rotation: number;
  cosA: number;
  size: number;
  oscillationSpeed: number;
  xSpeed: number;
  ySpeed: number;
  time: number;
  frontColor: string;
  backColor: string;
  corners: Vector2[];
  static bounds: Vector2;

  constructor(x: number, y: number) {
    this.pos = new Vector2(x, y);
    this.rotation = Math.random() * 360 * DEG_TO_RAD;
    this.angle = Math.random() * 360 * DEG_TO_RAD;
    this.cosA = 1;
    this.size = 10;
    this.oscillationSpeed = Math.random() * 1.5 + 0.5;
    this.xSpeed = 40;
    this.ySpeed = Math.random() * 60 + 50;
    this.corners = [];
    this.time = Math.random();
    const ci = Math.floor(Math.random() * COLORS.length);
    this.frontColor = COLORS[ci][0];
    this.backColor = COLORS[ci][1];

    for (let i = 0; i < 4; i++) {
      const dx = Math.cos(this.angle + DEG_TO_RAD * (i * 90 + 45));
      const dy = Math.sin(this.angle + DEG_TO_RAD * (i * 90 + 45));
      this.corners[i] = new Vector2(dx, dy);
    }
  }

  update(dt: number) {
    this.time += dt;
    this.rotation += (Math.random() * 600 + 800) * dt;
    this.cosA = Math.cos(this.rotation);
    this.pos.x += Math.cos(this.time * this.oscillationSpeed) * this.xSpeed * dt;
    this.pos.y += this.ySpeed * dt;
    if (this.pos.y > ConfettiPaper.bounds.y) {
      this.pos.x = Math.random() * ConfettiPaper.bounds.x;
      this.pos.y = 0;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.cosA > 0 ? this.frontColor : this.backColor;
    ctx.beginPath();
    ctx.moveTo(
      this.pos.x + this.corners[0].x * this.size,
      this.pos.y + this.corners[0].y * this.size * this.cosA
    );
    for (let i = 1; i < 4; i++) {
      ctx.lineTo(
        this.pos.x + this.corners[i].x * this.size,
        this.pos.y + this.corners[i].y * this.size * this.cosA
      );
    }
    ctx.closePath();
    ctx.fill();
  }
}

ConfettiPaper.bounds = new Vector2(0, 0);

export const Confetti: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationId = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.parentElement?.offsetWidth || window.innerWidth;
    let height = canvas.parentElement?.offsetHeight || window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    ConfettiPaper.bounds = new Vector2(width, height);

    const confettiCount = 25;
    const papers = Array.from({ length: confettiCount }, () =>
      new ConfettiPaper(Math.random() * width, Math.random() * height)
    );

    const update = () => {
      ctx.clearRect(0, 0, width, height);
      for (let paper of papers) {
        paper.update(DT);
        paper.draw(ctx);
      }
      animationId.current = window.requestAnimationFrame(update);
    };

    update();

    const handleResize = () => {
      width = canvas.parentElement?.offsetWidth || window.innerWidth;
      height = canvas.parentElement?.offsetHeight || window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      ConfettiPaper.bounds = new Vector2(width, height);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (animationId.current) window.cancelAnimationFrame(animationId.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 88,
        width: "100%",
        height: "100%",
        pointerEvents: "none"
      }}
    />
  );
};
