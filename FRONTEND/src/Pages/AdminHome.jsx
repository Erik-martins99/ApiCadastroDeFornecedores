import { useState } from "react"
import Header from "../Components/Header/Header"
import List from "../Components/List/List"
import ListHeader from "../Components/Header/ListHeader";
import DetailsItem from "../Components/Datails/Details";

const AdmHome = () => {
    const [ endpoint, setEndpoint ] = useState('realtime')
    const [page, setPage] = useState(1)
    return (
        <>
            <div>
                <Header />
            </div>
            <div className="w-full flex flex-row items-center">
                <div className="w-full flex flex-col items-center">
                    <div className="flex flex-col w-10/12 rounded-lg p-5 mt-10
                        dark:bg-gray-900/10
                        transition-colors duration-300">
                        <div>
                            <List />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdmHome