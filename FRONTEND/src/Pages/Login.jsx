// src/pages/Login.jsx

import LoginForm from "../Components/Form/LoginForm"

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
            <LoginForm title={"GERENCIAMENTO DE PERFIL"} endpoint={"/"} title_link={"Listar Fornecedores"} link={"/loginAdm"}/>
        </div>
    </div>
  )
}

export default Login
