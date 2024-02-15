export const initialState = {
    isLogged:localStorage.getItem("token"),
    token:localStorage.getItem("isLogged"),
    userDetails:JSON.parse(localStorage.getItem("userDetails"))
}