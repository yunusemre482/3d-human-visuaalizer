import React, { useEffect, useRef } from "react";
import { useThree, useFrame, extend } from "@react-three/fiber";
import { Extrude, OrbitControls, Center } from "@react-three/drei";
import * as THREE from "three";


const Controller = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controlsRef = useRef();

  useFrame(() => {controlsRef.current.update()});

  return (
    <orbitControls
  
      ref={controlsRef}
      args={[camera, domElement]}
      autoRotate={false}
    />
  );
};

export default Controller;
