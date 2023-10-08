import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div class="flex p-5">
        <button onClick={()=>setColor('#FF8080')} class=" text-white font-bold py-2 px-4 rounded mr-4" style={{backgroundColor: "#FF8080", border:"1px solid black"}}>
          Pink
        </button>
        <button onClick={()=>setColor('#FFCF96')} class=" text-white font-bold py-2 px-4 rounded mr-4" style={{backgroundColor: "#FFCF96", border:"1px solid black"}}>
          Skin
        </button>
        <button onClick={()=>setColor('#186F65')} class=" text-white font-bold py-2 px-4 rounded mr-4" style={{backgroundColor: "#186F65", border:"1px solid black"}}>
          Green
        </button>
        <button onClick={()=>setColor('#04364A')} class=" text-white font-bold py-2 px-4 rounded mr-4" style={{backgroundColor: "#04364A", border:"1px solid black"}}>
          Blue
        </button>
        <button onClick={()=>setColor('#D80032')} class=" text-white font-bold py-2 px-4 rounded" style={{backgroundColor: "#D80032", border:"1px solid black"}}>
          Red
        </button>
      </div>
    </div>
  );
}

export default App;
