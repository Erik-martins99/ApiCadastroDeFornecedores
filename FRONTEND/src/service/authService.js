// src/services/authService.js
export async function login(cnpj, password) {
  const response = await fetch("http://localhost:5194/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ cnpj, password })
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || "Login failed")
  }

  return response.json()
}
