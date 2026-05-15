// src/pages/Login.jsx

import LoginForm from "../Components/Form/LoginForm"

const LoginAdm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
            <LoginForm title={"LISTA DE FORNECEDORES"} endpoint={"/adm"} title_link={"Login"} link={"/login"}/>
        </div>
    </div>
  )
}

export default LoginAdm
