import { useState } from "react"
// import Pokemon from "./components/Pokemon"
import Pokemon from "./components/Pokemon_reduce"

function App() {
  return (
    <div className="bg-slate-200 m-8 rounded-lg shadow-md p-16">
      <h1 className="text-5xl font-bold mb-12">Event Handling</h1>
      <Pokemon name={"hitmonchan"} />
    </div>
  )
}

export default App
