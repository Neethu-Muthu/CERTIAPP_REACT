import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Issue from './components/Issue'
import Verification from './components/Verification'

import Mainlayout from './Layout/Mainlayout'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import CertiHome from './Pages/CertiHome'
import CertiIssuePage from './Pages/CertiIssuePage'
import CertificatePage from './Pages/CertificatePage'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Mainlayout />}>
          <Route path="/" element={<CertiHome />} />
          <Route path="/Issue" element={<CertiIssuePage />} />
          <Route path="/Certificate" element={<CertificatePage />} />
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
   
    </>
  )
}

export default App
