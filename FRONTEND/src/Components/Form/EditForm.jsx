import Button from "@mui/material/Button"
import Snackbar from "@mui/material/Snackbar"
import Alert from "@mui/material/Alert"
import TextField from "@mui/material/TextField"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { deleteData, putData } from "../../service/service"

const EditForm = () => {
    const token = localStorage.getItem("token")

    const [cnpj, setCnpj] = useState("")
    const [razaoSocial, setRazaoSocial] = useState("")
    const [nomeFantasia, setNomeFantasia] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [endereco, setEndereco] = useState("")
    const [cidade, setCidade] = useState("")
    const [uf, setUf] = useState("")
    const [atividadePrincipal, setAtividadePrincipal] = useState("")
    const [errors, setErrors] = useState({})
    const [generalError, setGeneralError] = useState("")
    const [openSuccess, setOpenSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const body = {
                cnpj: cnpj,
                razaoSocial: razaoSocial,
                nomeFantasia: nomeFantasia,
                email: email,
                telefone: telefone,
                endereco: endereco,
                cidade: cidade,
                uf: uf,
                atividadePrincipal: atividadePrincipal
            }
            
            await putData("http://127.0.0.1:5194/fornecedor/", body)
            setOpenSuccess(true)
        } catch (err) {
            if (err.errors) {
                setErrors(err.errors)
                return
            }

            if (err.message) {
                setGeneralError(err.message)
            }
        }
    }

    const deleteSubmit = async (e) => {
        e.preventDefault()

        try {
            await deleteData("http://127.0.0.1:5194/fornecedor/")
            window.location.href = "/login"
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetch(`http://127.0.0.1:5194/fornecedor/user`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setCnpj(data.cnpj)
            setRazaoSocial(data.razaoSocial)
            setNomeFantasia(data.nomeFantasia)
            setEmail(data.email)
            setTelefone(data.telefone)
            setEndereco(data.endereco)
            setCidade(data.cidade)
            setUf(data.uf)
            setAtividadePrincipal(data.atividadePrincipal)
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <>
            <div className="min-h-screen w-full flex items-center justify-center p-5">
                <div className="w-full flex flex-col items-center">
                    <div className="w-full max-w-4xl
                            dark:bg-gray-200
                            backdrop-blur-sm
                            rounded-3xl
                            shadow-xl
                            border border-zinc-200/10
                            p-8
                            transition-colors duration-300">
                        <form onSubmit={handleSubmit}>
                            <h1 className="text-xl font-bold text-green-700">ATUALIZAR DADOS</h1>
                            <h1 className="text-md font-bold text-green-700">{nomeFantasia} - {cnpj}</h1>

                            <div className="my-5">
                                <TextField label="Razao Social" variant="outlined" color="success"
                                sx={{
                                    width: "400px",
                                }}
                                value={razaoSocial}
                                onChange={(e) => setRazaoSocial(e.target.value)}/>
                            </div>

                            <div className="my-5">
                                <TextField label="Nome Fantasia" variant="outlined" color="success"
                                sx={{
                                    width: "600px",
                                }}
                                value={nomeFantasia}
                                onChange={(e) => setNomeFantasia(e.target.value)}/>
                            </div>

                            <TextField
                                label="E-mail"
                                variant="outlined"
                                color="success"
                                sx={{ width: "600px" }}
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)

                                    setErrors((prev) => {
                                        const updated = { ...prev }
                                        delete updated.Email
                                        return updated
                                    })
                                }}
                                error={Boolean(errors.Email)}
                                helperText={errors.Email?.[0] || ""}
                            />

                            <div className="my-5">
                                <TextField label="Telefone" variant="outlined" color="success"
                                sx={{
                                    width: "600px",
                                }}
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}/>
                            </div>

                            <div className="my-5">
                                <TextField label="Endereço" variant="outlined" color="success"
                                sx={{
                                    width: "600px",
                                }}
                                value={endereco}
                                onChange={(e) => setEndereco(e.target.value)}/>
                            </div>

                            <div className="my-5">
                                <TextField label="Cidade" variant="outlined" color="success"
                                sx={{
                                    width: "600px",
                                }}
                                value={cidade}
                                onChange={(e) => setCidade(e.target.value)}/>
                            </div>

                            <div className="my-5">
                                <TextField label="UF" variant="outlined" color="success"
                                sx={{
                                    width: "600px",
                                }}
                                value={uf}
                                onChange={(e) => {
                                    setUf(e.target.value)
                                    
                                    setErrors((prev) => {
                                        const updated = { ...prev }
                                        delete updated.Uf
                                        return updated
                                    })
                                }}
                                error={Boolean(errors.Uf)}
                                helperText={errors.Uf?.[0] || ""}
                                />
                            </div>

                            <div className="my-5">
                                <TextField label="Principal atividade" variant="outlined" color="success"
                                sx={{
                                    width: "600px",
                                }}
                                value={atividadePrincipal}
                                onChange={(e) => setAtividadePrincipal(e.target.value)}/>
                            </div>

                            <div className="w-full flex flex-col items-end">
                                <div className="flex flex-row gap-x-2 mx-2">
                                    <Button variant="outlined" color="warning"
                                    component={Link}
                                    to="/"
                                    sx={{
                                        width: "100px"
                                    }}>Back</Button>
                                    <Button variant="outlined" color="error"
                                    sx={{
                                        width: "100px"
                                    }}
                                    onClick={deleteSubmit}
                                    >Delete</Button>
                                    <Button type="submit" variant="outlined" color="success"
                                    sx={{
                                        width: "100px"
                                    }}
                                    //onClick={() => handleSubmit()}
                                    >Update</Button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Snackbar
                    open={openSuccess}
                    autoHideDuration={3000}
                    onClose={() => setOpenSuccess(false)}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                >
                    <Alert
                        onClose={() => setOpenSuccess(false)}
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        Fornecedor {razaoSocial} atualizado com sucesso!
                    </Alert>
                </Snackbar>
            </div>
        </>
    )
}

export default EditForm