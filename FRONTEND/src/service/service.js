export async function postData(url, body) {
    const token = localStorage.getItem("token")

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || "Request failed")
    }

    return response.json()
}

export async function postDataUser(url, body) {

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(body)
  })

  const data = await response.json()

  if (!response.ok) {
    throw data
  }

  return data
}

export async function putData(url, body) {
    const token = localStorage.getItem("token")

    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(body)
    })

    const data = await response.json()

    if (!response.ok) {
        throw data
    }

    return data
}

export async function deleteData(url) {
    const token = localStorage.getItem("token")

    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`
        }
    })       
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
    }
}
