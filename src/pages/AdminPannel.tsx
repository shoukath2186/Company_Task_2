import React from 'react'
// import NaveBar from "../componests/NaveBar"
import Footer from '../componests/Navbar'
import Login from '../componests/adminComponents/Login'
import MenuHandling from '../componests/adminComponents/MenuHandling'


function Admin() {

  const [valid, setValid] = React.useState<boolean>(false)

  return (
    <>
      {/* <NaveBar /> */}


      <div className="text-white bg-black min-h-screen w-full  ">
       {valid? <Login setValid={setValid}/>:<MenuHandling/>}
      </div>

      <div className="absolute w-full ">
      <Footer/>
      </div>
    </>

  )
}

export default Admin