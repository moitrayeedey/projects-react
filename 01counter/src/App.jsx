import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);
  const addCount = () => {
    if(count < 100) {
      setCount(prev => prev+1);
    }
  };
  const removeCount = () => {
    if(count > 0) {
      setCount(prev => prev-1);
    }
  }
  return (
    <div className="bg-slate-700 h-screen w-screen p-5">
      <h1 className="text-center text-yellow-100 text-4xl p-5">Counter Project</h1>
      <h2 className="bg-zinc-500 text-center text-3xl m-5 p-5">Count: {count}</h2>
      <div className="text-center text-2xl m-5 p-5 flex items-center justify-center gap-4">
        <button className="bg-zinc-500 p-3 rounded" onClick={addCount}>Add Count</button>
        <button className="bg-zinc-500 p-3 rounded" onClick={removeCount}>Remove Count</button>
      </div>
    </div>
  )
}

export default App
