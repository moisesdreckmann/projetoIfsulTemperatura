import { useContext } from "react";
import userContext from "../contexts/userContext";
import '../App.css'

function Dashboard() {

    const {user} = useContext(userContext)

    return(
        <>
        
        <p>oi</p>
        <>{"ola"+ user}</>
        </>
    )
}

export default Dashboard