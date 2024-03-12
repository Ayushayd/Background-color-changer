import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState("olive")
  return (

    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      
      <div className='flex flex-wrap justify-center py-8 text-5xl font-mono font-bold underline'>Background Color Changer</div>

      <div className='flex items-center flex-col border-solid border-2 max-w-5xl h-2/3 ml-60'>
        <p className='flex flex-wrap justify-center py-8 text-2xl font-mono'>This is a background color changing website. <br /> Here the given buttons on bottom will change the color of the background.</p>
        <div className='flex flex-wrap justify-center py-8 text-4xl font-mono font-bold'>color is style = {color}</div>
        <span className='py-8 text-2xl font-mono'>by Ayush Gupta</span>
      </div>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

          <button onClick = {() =>  setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}}>Red</button>

          <button onClick = {() => setColor("green")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}}>Green</button>

          <button onClick = {() => setColor("blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}}>Blue</button>

          <button onClick = {() => setColor("brown")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "brown"}}>Brown</button>

          <button onClick = {() => setColor("cyan")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "cyan"}}>Cyan</button>

          <button onClick = {() => setColor("pink")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "pink"}}>Pink</button>

          <button onClick = {() => setColor("yellow")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "yellow"}}>Yellow</button>

          <button onClick={() => setColor("orange")} 
          className=' outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "orange"}}>Orange</button>

        </div>
      </div>

    </div>

  )
}

export default App
