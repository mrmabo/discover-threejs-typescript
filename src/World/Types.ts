import {
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  Object3DEventMap,
} from "three";

export interface Updateable
  extends Mesh<BoxGeometry, MeshStandardMaterial, Object3DEventMap> {
  tick: (delta?: number) => void;
}
