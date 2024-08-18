import { PerspectiveCamera } from "three";

export default function CreateCamera(): PerspectiveCamera {
  const camera = new PerspectiveCamera(35, 1, 0.1, 100);

  camera.position.set(0, 0, 10);

  return camera;
}
