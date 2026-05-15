import Button from "@mui/material/Button"
import { Link } from "react-router-dom"
import LogoutIcon from '@mui/icons-material/Logout';
import DarkModeButton from "../Button/DarkModeButton";

const Header = () => {
    const logout = () => {
        localStorage.removeItem('token')
        window.location.href='/login'
    }

    return(
        <>
            <div className="flex flex-col items-center h-16 bg-gradient-to-r from-lime-600 to-green-600">
                <div className="px-8 w-full flex flex-row items-center justify-between">
                    <h1 className="text-4xl font-bold my-3">
                        GERENCIAMENTO DE FORNECEDOR
                    </h1>
                    <div className="flex flex-row items-center gap-x-2">
                        <DarkModeButton />
                        <Button variant="" color="" size="small"
                        onClick={() => logout()}><LogoutIcon /></Button>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Header