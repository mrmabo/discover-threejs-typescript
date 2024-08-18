import React, { useEffect } from "react";
import createCamera from "./Components/CreateCamera";
import createMesh from "./Components/CreateMesh";
import createRenderer from "./Systems/Renderer";
import CreateScene from "./Components/CreateScene";
import { Resizer } from "./Systems/Resizer";

const World: React.FC = () => {
  useEffect(() => {
    const canvas: any = document.getElementById("canvas");
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const scene = CreateScene();
    const meshs = createMesh();

    meshs.map((mesh) => {
      return scene.add(mesh);
    });

    const camera = createCamera();
    scene.add(camera);

    const renderer = createRenderer(canvas);
    new Resizer(canvas, camera, renderer);
    renderer.render(scene, camera);
  });

  return <canvas id="canvas" />;
};

export default World;
