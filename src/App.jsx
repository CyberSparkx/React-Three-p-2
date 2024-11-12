import React from 'react'
import {Canvas} from "@react-three/fiber"
import  "./style.css"
import {Environment, OrbitControls, ScrollControls} from "@react-three/drei"
import Mac from './Mac'
import { AmbientLight } from 'three'
const App = () => {
  return (
     <Canvas camera={{fov : 12 , position : [0,-6,200] }}>
      <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"]} />
      <ScrollControls>
      <Mac/>
      </ScrollControls>
    </Canvas>
  )
}

export default App