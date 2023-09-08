import React, { useEffect, useState } from 'react'
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AllRoutes from "./AllRoutes"
import NavB from './NavB';

const Signup = () => {
    const [value, setValue] = useState("")
    const navigate = useNavigate();

    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then(data => {
                console.log(data)
                setValue(data.user.email)
                localStorage.setItem("email", data.user.email)
                navigate("/")
            })
    }
    useEffect(() => {
        setValue(localStorage.getItem("email"))
    }, [])

    const handleLogout = () => {
        localStorage.clear("email");
        window.location.reload();
    }

    return (
        <div>{value ? <>
            <button onClick={handleLogout}>Logout</button>
            <AllRoutes />
            <NavB />
        </>
            : <Button onClick={handleClick}> Signin with Google</Button>
        } </div>
    )
}

export default Signup

