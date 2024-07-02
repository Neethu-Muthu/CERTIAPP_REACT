import React from 'react'

const Issue = () => {
  return (
    <>
 <h1 className="text-3xl font-medium mt-3 ml-4 font-serif font-semibold">Certificate Dapp</h1>
          
          <div className="box-content w-2/4 h-6/6 mb-12 shadow-lg mx-auto mt-28 pl-4 pt-4 bg-slate-100 font-serif">
              <form>
                  <p className="text-xl font-semibold font-serif">Issue New Certificate</p><br/>
                  <p className="font-serif">Select Course*</p>
                  <select name="course" className="w-96 h-9 rounded-md bg-white">
                      <option value="CBA" selected >Certified Blockchain Associate</option>
                      <option value="CED">Certified Ethereum Developer</option>
                      <option value="CHF">Certified Hyperledger Fabric Developer</option>
                  </select>
                  <p className="font-serif">Certificate ID*</p>
                  <input type="text" placeholder="Certificate ID" class="w-96 h-9 rounded-md border-2"/>
                  <p className="font-serif font-medium">Candidate name*</p>
                  <input type="text" placeholder="Name" class="w-96 h-9 rounded-md border-2"/>
                  <p className="font-serif">Select Grade*</p>
                  <select name="Grade" className="w-96 h-9 rounded-md border-2 bg-white">
                      <option value="Grade" selected >S</option>
                      <option value="Grade">A</option>
                      <option value="Grade">B</option>
                      <option value="Grade">C</option>
                      <option value="Grade">D</option>
                      <option value="Grade">E</option>
                      <option value="Grade">F</option>
                  </select>
                  <p className="font-serif">Issue Date*</p>
                  <input type="date" className="w-96 h-9 rounded-md border-2"/><br/><br/>
                  <a href="/Certificate">
                  <input type="button" value="Issue Certificate" className="bg-cyan-400 hover:bg-sky-600 hover:text-white w-36 h-10 rounded mb-12 font-serif"/></a>
              </form>
            </div>
    </>
  )
}

export default Issue