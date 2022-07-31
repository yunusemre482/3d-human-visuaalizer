import * as React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import { Html, useProgress } from "@react-three/drei";

export default function ProgressBar() {
  const { progress } = useProgress();
  console.log(progress);
  return (
    <Html as="div" center className="progress-bar">
      <h2 style={{ width: "400px", textAlign: "center", margin: "10px 5px" }}>
        Loading...
      </h2>
      <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
        <LinearProgress color="primary" />
      </Stack>
    </Html>
  );
}
