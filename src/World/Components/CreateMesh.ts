import {
  MeshBasicMaterial,
  Mesh,
  BufferGeometry,
  BufferAttribute,
  DoubleSide,
  BoxGeometry,
} from "three";

export default function CreateMesh(): Mesh[] {
  // render mesh as cube
  const cubeGeo = new BoxGeometry(1, 1, 1);
  const cubeMaterial = new MeshBasicMaterial();

  const cube = new Mesh(cubeGeo, cubeMaterial);

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

  const triMaterial = new MeshBasicMaterial({
    color: 0x00ff00,
    side: DoubleSide,
  });

  const triangle = new Mesh(triGeo, triMaterial);
  triangle.position.set(1, 2, 3);

  const meshs = [];
  meshs.push(cube, triangle);
  return meshs;
}
