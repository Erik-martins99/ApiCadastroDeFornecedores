import CreateUserForm from "../Components/Form/CreateUserForm"

const RegisterUser = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-100">
            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
                <CreateUserForm />
            </div>
        </div>
    )
}

export default RegisterUser