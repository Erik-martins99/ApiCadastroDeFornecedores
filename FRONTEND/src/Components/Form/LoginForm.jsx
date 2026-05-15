// src/components/forms/LoginForm.jsx
import { useState } from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Alert from "@mui/material/Alert"
import { login } from "../../service/authService"
import { Link } from "react-router-dom"

const LoginForm = ({ title, endpoint, title_link, link}) => {
  const [cnpj, setCnpj] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const data = await login(cnpj.replace(/\D/g, ""), password)

      localStorage.setItem("token", data.token)

      //window.location.href = "/"
      window.location.href = endpoint
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
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

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-green-700 text-center">
        {title}
      </h1>

      {error && <Alert severity="error">{error}</Alert>}

      

      <TextField
        label="CNPJ"
        type="text"
        value={cnpj}
        onChange={(e) => setCnpj(formatCNPJ(e.target.value))}
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
        disabled={loading}
        size="large"
      >
        {loading ? "Entrando..." : "Entrar"}
      </Button>

      <Link to="/register" className="flex flex-col items-end text-green-800 text-sm">Registrar Fornecedor</Link>
      <Link to={link} className="flex flex-col items-end text-green-800 text-sm">{title_link}</Link>
    </form>
  )
}

export default LoginForm
