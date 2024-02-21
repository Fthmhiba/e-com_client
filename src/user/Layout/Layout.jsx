
import { Outlet } from "react-router-dom"
import Header from "../Header/Header"

function Layout() {
  return (
    <div style={{display:"flex"}}>
        <div className=" w-[100%] h-[100vh] rounded-xl m-auto bg-stone-500  ps-6 pt-2">
            <Header/>
          <Outlet/>
        </div>
    </div>
  )
}

export default Layout
