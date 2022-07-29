
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/scene.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group scale={0.1}>
          <primitive object={nodes.mixamorig1Hips} />
          <skinnedMesh
            name="Ch17_Eyelashes"
            geometry={nodes.Ch17_Eyelashes.geometry}
            material={materials.Ch17_hair}
            skeleton={nodes.Ch17_Eyelashes.skeleton}
          />
          <skinnedMesh
            name="Ch17_Hair"
            geometry={nodes.Ch17_Hair.geometry}
            material={materials.Ch17_hair}
            skeleton={nodes.Ch17_Hair.skeleton}
          />
          <skinnedMesh
            name="Ch17_Body"
            geometry={nodes.Ch17_Body.geometry}
            material={materials.Ch17_body}
            skeleton={nodes.Ch17_Body.skeleton}
          />
          <skinnedMesh
            name="Ch17_Boots"
            geometry={nodes.Ch17_Boots.geometry}
            material={materials.Ch17_body}
            skeleton={nodes.Ch17_Boots.skeleton}
          />
          <skinnedMesh
            name="Ch17_Helmet"
            geometry={nodes.Ch17_Helmet.geometry}
            material={materials.Ch17_body}
            skeleton={nodes.Ch17_Helmet.skeleton}
          />
          <skinnedMesh
            name="Ch17_Vest"
            geometry={nodes.Ch17_Vest.geometry}
            material={materials.Ch17_body}
            skeleton={nodes.Ch17_Vest.skeleton}
          />
          <skinnedMesh
            name="Ch17_Shirt"
            geometry={nodes.Ch17_Shirt.geometry}
            material={materials.Ch17_body}
            skeleton={nodes.Ch17_Shirt.skeleton}
          />
          <skinnedMesh
            name="Ch17_Pants"
            geometry={nodes.Ch17_Pants.geometry}
            material={materials.Ch17_body}
            skeleton={nodes.Ch17_Pants.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.glb");