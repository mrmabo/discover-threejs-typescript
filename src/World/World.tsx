import React, { useEffect } from "react";
import createCamera from "./Components/CreateCamera";
import createMesh from "./Components/CreateMesh";
import createRenderer from "./Systems/Renderer";
import CreateScene from "./Components/CreateScene";
import { Resizer } from "./Systems/Resizer";
import CreateLights from "./Components/CreateLights";
import { Mesh } from "three";

const World: React.FC = () => {
  useEffect((): void => {
    const canvas: any = document.getElementById("canvas");
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const scene = CreateScene();
    const meshs = createMesh();

    const light = CreateLights();

    meshs.map((mesh: Mesh) => {
      return scene.add(mesh, light);
    });

    const camera = createCamera();
    scene.add(camera);

    console.log(scene.children); // the children array contains all objects which we added

    const renderer = createRenderer(canvas);
    const resizer = new Resizer(canvas, camera, renderer);

    resizer.onResize = () => {
      renderer.render(scene, camera);
    };

    function animation(): void {
      requestAnimationFrame(animation);

      meshs[0].rotation.x += 0.01;
      meshs[0].rotation.y += 0.01;
      renderer.render(scene, camera);
    }

    animation();
  });

  return <canvas id="canvas" />;
};

export default World;
