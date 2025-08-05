import { useState } from 'react'
import './index.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 via-emerald-100 to-blue-100 text-center px-4">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 mb-4">
        Hello world!
      </h1>

      <p className="text-lg text-gray-700 mb-6">
        Welcome to your Tailwind CSS React app.
      </p>

      <button
        onClick={() => setCount(count + 1)}
        className="px-6 py-3 bg-emerald-500 text-white rounded-xl font-medium shadow-lg hover:bg-emerald-600 transition-all duration-300"
      >
        You clicked {count} times
      </button>
    </div>
  )
}

export default App
