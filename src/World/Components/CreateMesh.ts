import {
  MeshBasicMaterial,
  Mesh,
  BufferGeometry,
  BufferAttribute,
  DoubleSide,
} from "three";

export default function CreateMesh(): Mesh {
  // const geometry = new BoxGeometry(2, 2, 2);
  // const material = new MeshBasicMaterial();

  // const cube = new Mesh(geometry, material);

  // Challenges: using BufferGeometry to render mesh as triangle
  const vertices = new Float32Array([
    0.0,
    1.0,
    0.0, // 顶点 1 (x, y, z)
    -1.0,
    -1.0,
    0.0, // 顶点 2 (x, y, z)
    1.0,
    -1.0,
    0.0, // 顶点 3 (x, y, z)
  ]);

  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new BufferAttribute(vertices, 3));

  const material = new MeshBasicMaterial({ color: 0x00ff00, side: DoubleSide });

  const mesh = new Mesh(geometry, material);
  return mesh;
}
