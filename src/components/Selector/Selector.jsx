import React, { useState } from "react";
import styled from "styled-components";
import "./Selector.css";
import Variant from "../Variant";
import { useThree } from "@react-three/fiber";
const ASSET_URI = "https://raw.githubusercontent.com/yunusemre482/assets/main/";
const ALL_VARIANTS = {
  Ch17_Hair: {
    name: "Ch17_Hair",
    variants: ["#003333", "#aeaeae", "#4d504d"],
  },
  Ch17_Helmet: {
    name: "Ch17_Helmet",
    variants: ["#ddffff", "#18af8e", "#eeccbb"],
  },
  Ch17_Boots: {
    name: "Ch17_Boots",
    variants: [
      { color: "#b27f42", image: null },
      { color: "#0d0e0d", image: `${ASSET_URI}black-2.jpeg` },
      { color: "#41251a", image: `${ASSET_URI}brown.jpeg` },
    ],
  },
};
const Selector = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="card">
        {children}

        <div className="colors">
          {Object.keys(ALL_VARIANTS).map((key) => {
            return (
              <Variant
                key={key}
                variants={ALL_VARIANTS[key].variants}
                meshName={ALL_VARIANTS[key].name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Selector;
