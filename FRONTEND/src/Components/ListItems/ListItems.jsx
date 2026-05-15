import Button from "@mui/material/Button"
import CheckIcon from '@mui/icons-material/Check';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from "react-router-dom";
import { deleteData, putData } from "../../service/service";

const ListItem = ({ razaoSocial, cnpj, email, cidade, uf  }) => {

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
        <>
            <div className="w-full flex flex-col items-center
             justify-between border border-gray-300 rounded-md py-2 px-5 mt-5 shadow-xl">
                <div className="w-full flex flex-row">
                    <h2 className="text-xl text-green-700">{formatCNPJ(cnpj)}</h2>
                </div>
                <div className="w-full flex flex-row items-center justify-between">
                    <div>
                        <h2 className="text-md text-green-700">{razaoSocial}</h2>
                    </div>
                    <div className="flex flex-row gap-x-10 justify-center items-center">
                        <div className="w-full flex flex-row">
                            <h2 className="text-xl text-green-700">{email}</h2>
                        </div>
                        <div className="w-full flex flex-row">
                            <h2 className="text-xl text-green-700">{cidade} - {uf}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListItem