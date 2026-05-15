// src/components/forms/LoginForm.jsx
import { useState } from "react"
import Snackbar from "@mui/material/Snackbar"
import Alert from "@mui/material/Alert"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"
import { postData, postDataUser } from "../../service/service"

const CreateUserForm = () => {
    const [cnpj, setCnpj] = useState("")
    const [razaoSocial, setRazaoSocial] = useState("")
    const [nomeFantasia, setNomeFantasia] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [endereco, setEndereco] = useState("")
    const [cidade, setCidade] = useState("")
    const [uf, setUf] = useState("")
    const [atividadePrincipal, setAtividadePrincipal] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [errors, setErrors] = useState({})
    const [openSuccess, setOpenSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        try {
            const body = {
                cnpj:  cnpj.replace(/\D/g, ""),
                razaoSocial: razaoSocial,
                nomeFantasia: nomeFantasia,
                email: email,
                telefone: telefone,
                endereco: endereco,
                cidade: cidade,
                uf: uf,
                atividadePrincipal: atividadePrincipal,
                password: password
            }
            await postDataUser('http://127.0.0.1:5194/fornecedor', body)
            setOpenSuccess(true)

            setTimeout(() => {
                window.location.href = "/login"
            }, 2000)
        } catch (err) {
            console.error(err)
            if (err.errors) {
                setErrors(err.errors)
            }
            if (err.message) {
                setErrors({
                    Cnpj: [err.message]
                })
            }
        } 
    }

    const formatCNPJ = (value) => {
        return value
        .replace(/\D/g, "") // remove tudo que não é número
        .replace(/^(\d{2})(\d)/, "$1.$2")
        .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/\.(\d{3})(\d)/, ".$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .slice(0, 18);
    };  

    const fetchCNPJData = async (cnpjValue) => {
        try {

            if (cnpjValue.length !== 14) return

            const response = await fetch(
                `https://brasilapi.com.br/api/cnpj/v1/${cnpjValue}`
            )

            if (!response.ok) {
                throw new Error("CNPJ não encontrado")
            }

            const data = await response.json()

            setRazaoSocial(data.razao_social || "")
            setNomeFantasia(data.nome_fantasia || "")
            if (data.email) {
                setEmail(data.email)
            }
            if (data.ddd_telefone_1) {
                setTelefone(data.ddd_telefone_1)
            }
            setCidade(data.municipio || "")
            setUf(data.uf || "")
            setEndereco(
                `${data.logradouro || ""}, ${data.numero || ""}`
            )

            // atividade principal
            if (data.cnae_fiscal_descricao) {
                setAtividadePrincipal(data.cnae_fiscal_descricao)
            }

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-green-700 text-center">
            CADASTRAR FORNECEDOROR
        </h1>

        <TextField
            label="CNPJ"
            type="text"
            value={cnpj}
            onChange={(e) => {
                setCnpj(formatCNPJ(e.target.value))

                setErrors((prev) => {
                    const updated = { ...prev }
                    delete updated.Cnpj
                    return updated
                })
            }}
            onBlur={() => fetchCNPJData(cnpj.replace(/\D/g, ""))}
            required
            fullWidth
            color="success"
            error={Boolean(errors.Cnpj)}
            helperText={errors.Cnpj ? errors.Cnpj[0] : ""}
        />

        <TextField
            label="Razao Social"
            type="text"
            value={razaoSocial}
            onChange={(e) => setRazaoSocial(e.target.value)}
            required
            fullWidth
            color="success"
        />

        <TextField
                label="Nome Fantasia"
                type="text"
                value={nomeFantasia}
                onChange={(e) => setNomeFantasia(e.target.value)}
                required
                fullWidth
                color="success"
        />

        <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)

                setErrors((prev) => {
                    const updated = { ...prev }
                    delete updated.Email
                    return updated
                })
            }}
            required
            fullWidth
            color="success"
            error={Boolean(errors.Email)}
            helperText={errors.Email ? errors.Email[0] : ""}
        />

        <TextField
                label="Telefone"
                type="text"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
                fullWidth
                color="success"
        />

        <TextField
                label="Endereço"
                type="text"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                required
                fullWidth
                color="success"
        />

        <TextField
                label="Cidade"
                type="text"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                required
                fullWidth
                color="success"
        />

        <TextField
                label="UF"
                type="text"
                value={uf}
                onChange={(e) => {
                    setUf(e.target.value)

                    setErrors((prev) => {
                        const updated = { ...prev }
                        delete updated.Uf
                        return updated
                    })
                }}
                required
                fullWidth
                color="success"
                error={Boolean(errors.Uf)}
                helperText={errors.Uf ? errors.Uf[0] : ""}
        />

        <TextField
                label="Atividade Principal"
                type="text"
                value={atividadePrincipal}
                onChange={(e) => setAtividadePrincipal(e.target.value)}
                required
                fullWidth
                color="success"
        />

        <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
            color="success"
        />

        <Button
            type="submit"
            variant="contained"
            color="success"
            size="large"
        >
            Registrar Fornecedor
        </Button>

        <Link to="/login" className="flex flex-col items-end text-green-800 text-xs">Login</Link>

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
                Fornecedor cadastrado com sucesso!
            </Alert>
        </Snackbar>
        </form>
    )
    }

    export default CreateUserForm
