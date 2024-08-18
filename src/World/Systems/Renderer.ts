import { WebGLRenderer } from "three";

export default function Renderer(canvas: HTMLCanvasElement): WebGLRenderer {
  const renderer = new WebGLRenderer({ canvas, antialias: true });

  return renderer;
}
