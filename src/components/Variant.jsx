import React from "react";
import styled from "styled-components";
import variantStore from "../store";

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  cursor: pointer;
`;
const Option = styled.div`
  background-color: ${(props) => (props.bg ? props.bg : "#fff")};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin: 4px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50px;
  width: 60%;
  gap:10%;
  align-items: center;
`;
const Title = styled.h2`
  margin: 8px 0;
  padding: 0;
  font-size: 18px;
`;
const Variant = ({ variants, meshName }) => {
  const handleSelectedVariants = variantStore(
    (state) => state.setSelectedVariants
  );

  return (
    <Row id={meshName} className={`variant-${meshName}`}>
      <Title className="variant-title">{meshName.split("_")[1].toUpperCase()}</Title>
      <Container>
        {variants.map((variant, index) => {
          return (
            <Option
              key={index}
              className={meshName}
              bg={variant?.color || variant}
              onClick={() => handleSelectedVariants(meshName, variant)}
            />
          );
        })}
      </Container>
    </Row>
  );
};
export default Variant;
