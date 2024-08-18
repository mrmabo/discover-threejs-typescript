import {
  Clock,
  Object3D,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
import { Updateable } from "../Types";

const clock = new Clock();
class Loop {
  private camera: PerspectiveCamera;
  private scene: Scene;
  private renderer: WebGLRenderer;
  private updatables: Object3D[] = [];

  constructor(
    camera: PerspectiveCamera,
    scene: Scene,
    renderer: WebGLRenderer,
  ) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
  }

  start() {
    let frameCount = 0;
    let fps = 0;
    let lastTime = 0;
    this.renderer.setAnimationLoop(() => {
      this.tick();
      const currentTime = clock.getElapsedTime();

      this.renderer.render(this.scene, this.camera);
      frameCount++;
      if (currentTime - lastTime >= 1) {
        fps = frameCount / (currentTime - lastTime);
        frameCount = 0;
        lastTime = currentTime;

        console.log(`FPS: ${fps.toFixed(2)} `);
      }
    });
  }

  addUpdateable(object: Updateable) {
    this.updatables.push(object);
  }

  tick() {
    const delta = clock.getDelta();
    for (const object of this.updatables) {
      (object as Updateable).tick(delta);
    }
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}

export default Loop;
