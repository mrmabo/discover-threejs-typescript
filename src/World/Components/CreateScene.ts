import { Color, Scene } from "three";

export default function CreateScene(): Scene {
  const scene = new Scene();
  scene.background = new Color("skyblue");

  return scene;
}
