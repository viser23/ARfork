import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {  Box } from '@react-three/drei'
import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <ARCanvas  camera={{ position: [0, 0, 0] }} dpr={window.devicePixelRatio} onCreated={({ gl }) => {gl.setSize(window.innerWidth, window.innerHeight);}}>
    <ARCanvas
    gl={{ antialias: false, powerPreference: "default", physicallyCorrectLights: true }}
    onCameraStreamReady={() => console.log("Camera stream ready")}
    onCameraStreamError={() => console.error("Camera stream error")}
    onCreated={({ gl }) => {
      gl.setSize(window.innerWidth, window.innerHeight)
    }}>
  <ambientLight />
  <pointLight position={[10, 10, 0]} intensity={10.0} />
  <ARMarker type={"pattern"} patternUrl={"data/hiro.patt"}>
      <Box args={[1]} scale={1} position={[0,0,0]}></Box>
  </ARMarker>
  </ARCanvas>
)
