import { useState } from "react";

function App() {
  const [tab, setTab] = useState("");

  return (
    <>
      <div className="flex justify-center items-center gap-5 p-4 border-b ">
        <button className="border p-2" onClick={() => setTab("Elements")}>Elements</button>
        <button className="border p-2" onClick={() => setTab("Console")}>Console</button>
        <button className="border p-2" onClick={() => setTab("Network")}>Network</button>
      </div>

    </>
  )
}

export default App
