import React from 'react'
import images from '../assets/images/images.jpeg'

const Verification = () => {
  return (
    <>
    <div className="text-center mt-10 ">
    {/* <img src="./src/assets/images/im2.png" alt="" className="w-12 h-12 mx-auto" /> */}
    <p className="text-4xl font-serif font-semibold h-14 text-red-800 mt-6">KERALA BLOCKCHAIN ACADEMY</p>
    </div>
    <div className="bg-slate-50 w-10/12 h-5/6 mx-auto mt-6 mb-40">
        <br />
        <img src={images} alt="" className="w-44 h-44 mx-auto " />
        <p  className="text-center mt-12 text-1xl mb-40 p-2"> This is to certify that Neethu M  
            has  successfully <br /> completed Certified Blockchain Architect<br />
            course from the peroid June 2024 to July 2024 from  <b>KERALA BLOCKCHAIN ACADEMY</b>.</p>
            <br />
    </div>

    </>
  )
}

export default Verification