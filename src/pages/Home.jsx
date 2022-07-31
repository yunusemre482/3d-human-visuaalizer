import React, { useState, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";

//import Chair from "../models/Model.chair";
import Man from "../models/Model.man";
import ProgressBar from "../components/ProgressBar";
import styled from "styled-components";
import { OrbitControls, Center } from "@react-three/drei";
import Selector from "../components/Selector/Selector";
import variantStore from "../store";
const CanvasElem = styled(Canvas)`
  width: 60% !important;
  height: 100% !important;
  margin-right: 20px;
`;

const Home = () => {
  const selectedVariants = variantStore((state) => state.selectedVariants);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#384fff",
      }}
    >
      <h2 style={{ color: "white" ,margin:"auto 10px"}}>Meta Human Editor</h2>
      <Selector>
        <CanvasElem>
          <OrbitControls />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <directionalLight position={[-10, 1, -10]} />
          <Suspense fallback={<ProgressBar />}>
            <Center>
              <Man position={[0, 0, 0]} scale={[0.3, 0.3, 0.3]} selectedVariants={selectedVariants} />
              {/* <Chair position={[0, -1, 0]} scale={[1.1, 1.1, 1.1]} /> */}
            </Center>
          </Suspense>
        </CanvasElem>
      </Selector>
    </div>
  );
};

export default Home;
