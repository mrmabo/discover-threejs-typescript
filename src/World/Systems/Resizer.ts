import { PerspectiveCamera, WebGLRenderer } from "three";

class Resizer {
  constructor(
    container: HTMLElement,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer,
  ) {
    setSize(container, camera, renderer);
    window.addEventListener("resize", () => {
      setSize(container, camera, renderer);

      this.onResize();
    });
  }

  onResize() {}
}

const setSize = (
  container: HTMLElement,
  camera: PerspectiveCamera,
  renderer: WebGLRenderer,
) => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio / 2); // In Retina screener, need to degrade the pixel.
};

export { Resizer };
