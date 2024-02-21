import { NavLink } from "react-router-dom"

function Header() {
    return (
        <>
            <div className="  flex gap-4 justify-end my-8 mx-10 ">
                <p className="text-lg text-white hover:text-yellow-300">{JSON.parse(localStorage.getItem("users")).fname} {JSON.parse(localStorage.getItem("users")).lname}</p>
                <NavLink to={'/home'}><p className="text-lg text-white hover:text-yellow-300">Home</p></NavLink>
                <NavLink to={'/profile'}><p className="text-lg text-white hover:text-yellow-300">Profile</p></NavLink>
                <NavLink to={'/cart'}><p className="text-lg text-white hover:text-yellow-300">Cart</p></NavLink>
                <NavLink to={'/transactions'}><p className="text-lg text-white hover:text-yellow-300">Transactions</p></NavLink>
                <NavLink to={'/orders'}>
                    <p className="text-lg text-white hover:text-yellow-300">Orders</p>
                </NavLink>
                <p onClick={() => {
                    localStorage.removeItem("users")
                    localStorage.removeItem("token")
                    navigate('/user-login')
                }} className="text-lg text-white hover:text-yellow-300" >Logout</p>

            </div>
        </>
    )
}

export default Header