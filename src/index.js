import ReactDOM from "react-dom";
import React from "react";

import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";

ReactDOM.render(
  <ARCanvas
    camera={{ position: [0, 0, 0] }}
    dpr={window.devicePixelRatio}
    onCreated={({ gl }) => {
      gl.setSize(window.innerWidth, window.innerHeight);
    }}
  >
    <ambientLight />
    <pointLight position={[10, 10, 0]} />
    <ARMarker type={"pattern"} patternUrl={"data/hiro.patt"}>
      <mesh>
        <torusGeometry args={[1, 0.5, 16, 32]} />{" "}
        <meshStandardMaterial color={"green"} />
      </mesh>
    </ARMarker>
  </ARCanvas>,
  document.getElementById("root")
);
