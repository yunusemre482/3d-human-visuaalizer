import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import variantStore from "../store";
const MODEL_URL ="https://raw.githubusercontent.com/yunusemre482/assets/main/scene.glb";
export default function Man({ selectedVariants, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(MODEL_URL);
  const { actions } = useAnimations(animations, group);
  const colorMap = useLoader(
    TextureLoader,
    selectedVariants["Ch17_Boots"].image ||
      "https://raw.githubusercontent.com/yunusemre482/assets/main/kahverengi.jpeg"
  );
  console.log(selectedVariants);
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
            skeleton={nodes.Ch17_Hair.skeleton}
          >
            <meshBasicMaterial
              attach="material"
              map={materials.Ch17_hair.map}
              color={selectedVariants["Ch17_Hair"] || "black"}
              opacity={1}
              reflectivity={1}
            />
          </skinnedMesh>
          <skinnedMesh
            name="Ch17_Body"
            geometry={nodes.Ch17_Body.geometry}
            material={materials.Ch17_body}
            skeleton={nodes.Ch17_Body.skeleton}
          />
          <skinnedMesh
            name="Ch17_Boots"
            geometry={nodes.Ch17_Boots.geometry}
            skeleton={nodes.Ch17_Boots.skeleton}
          >
            <meshBasicMaterial
              attach="material"
              map={
                !selectedVariants["Ch17_Boots"].image
                  ? materials.Ch17_body.map
                  : colorMap
              }
              opacity={1}
            />
          </skinnedMesh>
          <skinnedMesh
            name="Ch17_Helmet"
            geometry={nodes.Ch17_Helmet.geometry}
            skeleton={nodes.Ch17_Helmet.skeleton}
          >
            <meshBasicMaterial
              map={materials.Ch17_body.map}
              attach="material"
              color={selectedVariants["Ch17_Helmet"] || "black"}
              opacity={1}
              reflectivity={1}
            />
          </skinnedMesh>
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

useGLTF.preload(MODEL_URL);
