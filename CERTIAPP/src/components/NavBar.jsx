import React from 'react'

const NavBar = () => {
  return (
    <>
<div className="flex gap-2 float-right mt-2 font-serif font-normal">
        <a href="/">
            <input type="button" name="" value="Home"
                className="w-28 h-10 text-center hover:bg-sky-600 rounded hover:text-white shadow bg-slate-200"/></a>
        <a href="/Issue">
            <input type="button" name="" value="Issue Certificate"
                className="w-36 h-10 text-center hover:bg-sky-600 rounded hover:text-white shadow bg-slate-200"/></a>
    </div>
    </>
  )
}

export default NavBar