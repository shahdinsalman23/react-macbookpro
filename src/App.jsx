import { Canvas } from '@react-three/fiber'
import React from 'react'
import './style.css'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from 'react-icons/io'

const App = () => {
  return (
    <div className="w-full h-screen font-['HelveticaNowDisplay']">
      <div className="navbar line flex items-center gap-8 absolute pb-3 top-5 left-1/2 -translate-x-1/2">
        {[ <FaApple className='h-6 w-6' />, "Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "Airpods", "Tv & Home", "Entertainment", "Accessories", "Support", <IoIosSearch className='h-6 w-6' />].map((e)=> ( <a href='' className='text-white font-[500] text-sm capitalize'>{e}</a>))}
      </div>
      <div className="absolute flex flex-col items-center text-white top-40 left-1/2 -translate-x-1/2 font-['HelveticaNowDisplay']">
        <h3 className='masked text-7xl tracking-tighter font-[700]'>macbook pro.</h3>
        <h5>Oh so pro!</h5>
        <p className='text-center w-3/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui necessitatibus quo aliquid accusantium?</p>
      </div>
      <Canvas camera={{ fov: 12, position: [1, -10, 220] }}>
        <OrbitControls />
        <Environment files={"https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"} />
        <ScrollControls pages={3} >
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App