import React, { useState, Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "../components/Model";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const CanvasElem = styled(Canvas)`
  width: 50vw;
  height: 50vh;
`;

const Home = () => {
  return (
    <Container>
      <CanvasElem>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={<div>loading ...</div>}>
          <Model />
        </Suspense>
      </CanvasElem>
    </Container>
  );
};

export default Home;
