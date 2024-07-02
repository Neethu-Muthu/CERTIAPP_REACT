import React from 'react'
import Dapp from '../assets/images/Dapp.png'

const Home = () => {
  return (
    <>
    <div>
    <div className="mt-16">
        <h1 className="text-4xl font-medium text-center font-semibold font-serif">Certificate Dapp</h1>
        <br/><br/>
        <img src={Dapp} alt="Image" className="mx-auto flex-none w-56 "/>
    </div>
    <br/><br/>
    <div className="mx-auto text-center gap-0 font-serif"> 
        <input type="search" name="" value="Enter Certificate ID to View"
            className="border-2 w-86 h-9 pl-4 rounded-2xl text-slate-500 bg-white mr-2 font-serif"/> 
        <input type="button" name="" value="Search" className="bg-cyan-400 w-20 h-9 text-white hover:bg-sky-500 rounded-xl"/>
        
    </div>
    </div>
   </>
  );
}

export default Home