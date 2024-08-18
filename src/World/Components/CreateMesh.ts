import {
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  Mesh,
  MeshStandardMaterial,
} from "three";

export default function CreateMesh(): Mesh[] {
  // render mesh as cube
  const cubeGeo = new BoxGeometry(1, 1, 1);
  //  const cubeMaterial = new MeshBasicMaterial(); // MeshBasicMaterial will ignore any light

  //  Swith the old "basic" material to a physically correct "standard" material
  const cubeMaterial = new MeshStandardMaterial({ color: "green" });

  const cube = new Mesh(cubeGeo, cubeMaterial);

  cube.rotation.set(-0.5, -0.1, 0.8);

  // Challenges: using BufferGeometry to render mesh as triangle
  const vertices = new Float32Array([
    0.0,
    1.0,
    0.0, // top 1 (x, y, z)
    -1.0,
    -1.0,
    0.0, // top 2 (x, y, z)
    1.0,
    -1.0,
    0.0, // top 3 (x, y, z)
  ]);

  const triGeo = new BufferGeometry();
  triGeo.setAttribute("position", new BufferAttribute(vertices, 3));

  const triMaterial = new MeshStandardMaterial({
    color: "blue",
  });

  const triangle = new Mesh(triGeo, triMaterial);
  triangle.position.set(1, 2, 3);

  triangle.rotation.set(-0.1, -0.4, 0.6);

  const meshes = [];
  meshes.push(cube, triangle);
  return meshes;
}
