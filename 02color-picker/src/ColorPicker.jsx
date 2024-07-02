import { useState } from 'react'

function ColorPicker() {
    const [color, setColor] = useState("#000");
    const handleColorChange = (event) => {
        setColor(event.target.value);
    }
  return (
    <div className='bg-slate-800 h-screen w-screen p-10'>
        <h1 className='text-center text text-4xl p-5 text-yellow-200 font-semibold'>Color Picker Project</h1>
        <div className='h-1/2 w-1/2 m-auto flex items-center justify-center' style={{backgroundColor: color}}>
            <p className='p-2 rounded-lg'>Color Code : {color}</p>
        </div>
        <div className='bg-slate-600 m-4 p-4 flex items-center justify-center gap-2 rounded-md'>
            <label> Select Color : </label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    </div>
  )
}

export default ColorPicker