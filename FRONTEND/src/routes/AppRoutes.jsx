import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import RegisterUser from '../Pages/RegisterUser';
import DetailsItem from '../Components/Datails/Details';
import DetailsItemPage from '../Pages/EditPage';
import EditPage from '../Pages/EditPage';
import LoginAdm from '../Pages/LoginAdm';
import AdmHome from '../Pages/AdminHome';

const ProtectRoute = ({ children }) => {
    const token = localStorage.getItem('token')

    if (!token) {
        return <Navigate to="/login" replace/>
    }
    return children
}


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />}/>
                <Route path='/loginAdm' element={<LoginAdm />}/>
                <Route path='/register' element={<RegisterUser />}/>
                <Route path="/" element={
                    <ProtectRoute>
                        <Home />
                    </ProtectRoute>} />
                <Route path="/adm" element={
                    <ProtectRoute>
                        <AdmHome />
                    </ProtectRoute>} />
                <Route path="/:id/details" element={
                    <ProtectRoute>
                        <DetailsItemPage />
                    </ProtectRoute>}/>
                <Route path="/edit" element={
                    <ProtectRoute>
                        <EditPage />
                    </ProtectRoute>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes