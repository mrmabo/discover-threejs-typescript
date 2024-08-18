import React, { useEffect } from "react";
import { Mesh } from "three";
import createCamera from "./Components/CreateCamera";
import CreateLights from "./Components/CreateLights";
import createMesh from "./Components/CreateMesh";
import CreateScene from "./Components/CreateScene";
import Loop from "./Systems/Loop";
import createRenderer from "./Systems/Renderer";
import { Resizer } from "./Systems/Resizer";

const World = () => {
  useEffect((): void => {
    const canvas: any = document.getElementById("canvas");
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const scene = CreateScene();
    const meshes = createMesh();

    const light = CreateLights();

    meshes.map((mesh: Mesh) => {
      return scene.add(mesh, light);
    });

    const camera = createCamera();
    scene.add(camera);

    console.log(scene.children); // the children array contains all objects which we added

    const renderer = createRenderer(canvas);
    const resizer = new Resizer(canvas, camera, renderer);

    const loop = new Loop(camera, scene, renderer);

    meshes.map((mesh: any) => {
      return loop.addUpdateable(mesh);
    });

    resizer.onResize = () => {
      loop.render();
    };

    loop.start();
  });

  return <canvas id="canvas" />;
};

export default World;
