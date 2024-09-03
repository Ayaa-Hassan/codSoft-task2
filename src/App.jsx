import { useState } from "react";
import { GiBowTieRibbon } from "react-icons/gi"



function App() {
  const [value, setValue] = useState('');

  return (
    <>
      <div className=" max-w-[1240] mx-auto  h-[100vh] text-white w-full   bg-gradient-to-r from-violet-300 from-10% via-sky-300 via-30% to-pink-300 to-90%   
    "> <h1 className="  font-bold text-3xl text-center py-10">I'm just a Calculator <GiBowTieRibbon size={30} className=" inline text-pink-400" /></h1>
        <div className=" justify-center items-center flex">
         
       
        
        <div className=" shadow-2xl sm:px-7 py-10 rounded-2xl bg-violet-300 shadow-gray-950 sm:mx-4 mx-3 px-1  ">
         
          <form action="    ">
            <div >
              <input type="text" value={value}   placeholder="0" className=" rounded-md py-6 px-4 outline-pink-200  text-pink-300 font-bold text-lg bg-pink-100 w-[90%] my-6 mx-4"  />
            </div>
            <div className="">
              <input onClick={e=> setValue(' ')} className=" input-button" type="button" value="AC" />
              <input onClick={e=> setValue( value.slice(0,-1))} className=" input-button" type="button" value="DE" />
              <input onClick={e=> setValue(value+e.target.value)} className=" input-button" type="button" value="." />
              <input onClick={e=> setValue(value+e.target.value)} className=" input-button" type="button" value="/" />
            </div>
            <div className="">
              <input onClick={e=> setValue(value+e.target.value)} className=" input-button" type="button" value="7" />
              <input onClick={e=> setValue(value+e.target.value)} className=" input-button" type="button" value="8" />
              <input onClick={e=> setValue(value+e.target.value)} className=" input-button" type="button" value="9" />
              <input onClick={e=> setValue(value+e.target.value)} className=" input-button" type="button" value="*" />
            </div>
            <div className="">
              <input onClick={e=> setValue(value+e.target.value)} className=" input-button" type="button" value="4" />
              <input onClick={e=> setValue(value+e.target.value)} className=" input-button" type="button" value="5" />
              <input onClick={e=> setValue(value+e.target.value)} className=" input-button" type="button" value="6" />
              <input onClick={e=> setValue(value+e.target.value)} className=" input-button" type="button" value="+" />
            </div>
            <div className="">
              <input onClick={e=> setValue(value+e.target.value)} className=" input-button" type="button" value="1" />
              <input onClick={e=> setValue(value+e.target.value)} className=" input-button" type="button" value="2" />
              <input onClick={e=> setValue(value+e.target.value)} className=" input-button" type="button" value="3" />
              <input onClick={e=> setValue(value+e.target.value)} className=" input-button" type="button" value="-" />
            </div>
            <div className="">
              <input onClick={e=> setValue(value+e.target.value)} className=" input-button" type="button" value="00" />
              <input onClick={e=> setValue(value+e.target.value)} className=" input-button" type="button" value="0" />
                <input onClick={e=> setValue(eval(value))} className=" input-button  w-[13.5em]" type="button" value="=" />
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
