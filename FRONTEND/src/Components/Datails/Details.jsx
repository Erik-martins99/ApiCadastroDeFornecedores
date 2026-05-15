import Button from "@mui/material/Button"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const DetailsItem = () => {

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

    const formatCNPJ = (value) => {
        return value
        .replace(/\D/g, "") // remove tudo que não é número
        .replace(/^(\d{2})(\d)/, "$1.$2")
        .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/\.(\d{3})(\d)/, ".$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .slice(0, 18);
    };  

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-5">

            <div className="
                w-full max-w-4xl
                dark:bg-zinc-900/15
                backdrop-blur-sm
                rounded-3xl
                shadow-xl
                border border-zinc-200/10
                p-8
                transition-colors duration-300
            ">

                <div className="mb-8">
                    <h1 className="
                        text-3xl font-bold
                        text-green-500
                    ">
                        {nomeFantasia} - {formatCNPJ(cnpj)}
                    </h1>

                    <p className="
                        text-green-800 mt-2
                    ">
                        Informações sobre o fornecedor
                    </p>
                </div>

                <div className="
                    grid grid-cols-1 md:grid-cols-2 gap-5
                ">
                    <div className="
                        md:col-span-2
                        bg-white dark:bg-zinc-800
                        rounded-2xl
                        p-5
                        shadow-md
                    ">
                        <p className="text-zinc-500 text-sm">Razao Social</p>
                        <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">
                            {razaoSocial}
                        </h2>
                    </div>

                    <div className="
                        bg-white dark:bg-zinc-800
                        rounded-2xl
                        p-5
                        shadow-md
                    ">
                        <p className="text-zinc-500 text-sm">CNPJ</p>
                        <h2 className="text-2xl font-bold text-zinc-800 dark:text-white">
                            #{cnpj}
                        </h2>
                    </div>

                    <div className="
                        bg-white dark:bg-zinc-800
                        rounded-2xl
                        p-5
                        shadow-md
                    ">
                        <p className="text-zinc-500 text-sm">Nome Fantasia</p>
                        <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">
                            {nomeFantasia}
                        </h2>
                    </div>

                    <div className="
                        bg-white dark:bg-zinc-800
                        rounded-2xl
                        p-5
                        shadow-md
                    ">
                        <p className="text-zinc-500 text-sm">E-mail</p>
                        <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">
                            {email}
                        </h2>
                    </div>

                    <div className="
                        bg-white dark:bg-zinc-800
                        rounded-2xl
                        p-5
                        shadow-md
                    ">
                        <p className="text-zinc-500 text-sm">Telefone</p>
                        <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">
                            {telefone}
                        </h2>
                    </div>

                    <div className="
                        md:col-span-2
                        bg-white dark:bg-zinc-800
                        rounded-2xl
                        p-5
                        shadow-md
                    ">
                        <p className="text-zinc-500 text-sm">Endereço</p>
                        <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">
                            {endereco}
                        </h2>
                    </div>

                    <div className="
                        md:col-span-2
                        bg-white dark:bg-zinc-800
                        rounded-2xl
                        p-5
                        shadow-md
                    ">
                        <p className="text-zinc-500 text-sm">Cidade</p>
                        <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">
                            {cidade}
                        </h2>
                    </div>

                    <div className="
                        md:col-span-2
                        bg-white dark:bg-zinc-800
                        rounded-2xl
                        p-5
                        shadow-md
                    ">
                        <p className="text-zinc-500 text-sm">UF</p>
                        <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">
                            {uf}
                        </h2>
                    </div>

                    <div className="
                        md:col-span-2
                        bg-white dark:bg-zinc-800
                        rounded-2xl
                        p-5
                        shadow-md
                    ">
                        <p className="text-zinc-500 text-sm">Principal Atividade</p>
                        <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">
                            {atividadePrincipal}
                        </h2>
                    </div>

                </div>

                <div className="flex justify-end gap-3 mt-8">

                    <Button
                        variant="outlined"
                        color="warning"
                        component={Link}
                        to="/edit"
                        sx={{
                            width: "120px",
                            height: "45px",
                            borderRadius: "12px"
                        }}
                    >
                        Edit
                    </Button>

                </div>

            </div>

        </div>
    )
}

export default DetailsItem