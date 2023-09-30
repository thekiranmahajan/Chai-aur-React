import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center fixed bottom-12 inset-x-0 px-2">
        <div
          className="flex justify-center flex-wrap gap-3 shadow-md bg-white px-3 py-2 rounded-3xl
      "
        >
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-md shadow-slate-800 active:scale-90 "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-md shadow-slate-800 active:scale-90 "
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-md shadow-slate-800 active:scale-90 "
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-md shadow-slate-800 active:scale-90 "
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor("gray")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-md shadow-slate-800 active:scale-90 "
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-md shadow-slate-800 active:scale-90 "
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-md shadow-slate-800 active:scale-90 "
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-md shadow-slate-800 active:scale-90 "
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-md shadow-slate-800 active:scale-90 "
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("lavender")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-md shadow-slate-800 active:scale-90 "
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-md shadow-slate-800 active:scale-90 "
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-md shadow-slate-800 active:scale-90 "
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
