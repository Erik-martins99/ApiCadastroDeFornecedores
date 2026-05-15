import { useEffect, useState } from "react"
import ListItem from "../ListItems/ListItems"
import formatDate from "../../service/formatDate"

const List = ({ endpoint, onChangeEndpoint, page, setPage }) => {

    const token = localStorage.getItem("token")

    const [items, setItems] = useState([])

    useEffect(() => {

        const fetchData = () => {

            fetch(
                `http://127.0.0.1:5194/fornecedor/`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (Array.isArray(data)) {
                    setItems(data)
                } else {
                    setItems([])
                }
            })
            .catch(err => console.error(err))
        }
    
        fetchData()

    }, [])

    return (
        <div className="w-full flex flex-col items-center">

            {items.map((item) => (
                <div key={item.id} className="w-full flex flex-row">
                    <ListItem
                        cnpj={item.cnpj}
                        razaoSocial={item.razaoSocial}
                        email={item.email}
                        cidade={item.cidade}
                        uf={item.uf}
                    />
                </div>
            ))}

        </div>
    )
}

export default List