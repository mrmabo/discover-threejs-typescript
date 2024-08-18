import { DirectionalLight } from "three";

export default function CreateLights() {
  // Create a directional light
  const light = new DirectionalLight("white", 8);

  // Create a PointLight
  //  const light = new PointLight("red", 9);

  light.position.set(10, 10, 10);
  return light;
}
