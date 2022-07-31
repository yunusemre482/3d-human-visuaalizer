
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("https://raw.githubusercontent.com/yunusemre482/assets/main/SwingChairBW.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0.06, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["ShellSteelholo-id-hofop80nj3"].geometry}
          material={materials.Seat_Steel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["MainSteelholo-id-fsbj4jcw6o"].geometry}
          material={materials.Main_Steel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Cushionholo-id-t67e0t6zyh"].geometry}
          material={materials.Cushion1}
        />
      </group>
    </group>
  );
}

useGLTF.preload("https://raw.githubusercontent.com/yunusemre482/assets/main/SwingChairBW.glb");